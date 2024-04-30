import React, { useState, useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledNote, StyledNoteHeader, StyledEditorContainer } from "./styles";
import { Button, message, Popconfirm } from "antd";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Input } from "antd";
import { useDebounce } from "../../../hooks";
import { getNoteById, deleteNote, updateNote } from "../../../api/NoteGateway";

const Note = () => {
  let { noteId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();
  const { TextArea } = Input;
  const [messageApi, contextHolder] = message.useMessage();
  const [noteData, setNoteData] = useState();
  const [deletePopOpen, setDeletePopOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const isFirstRender = useRef(true);

  const debouncedTitle = useDebounce(noteData?.noteTitle, 5000);
  const debouncedContent = useDebounce(noteData?.noteContent, 10000);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await getNoteById(user.id, noteId);
        if (res?.data) {
          setNoteData(res.data);
        }
      } catch (error) {
        console.error("Error fetching note:", error);
        navigate("/notes");
      }
    };

    fetchNote();
  }, [noteId]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    saveNote();
  }, [debouncedContent, debouncedTitle]);

  const handleSaveNoteClick = async () => {
    const saved = await saveNote();
    if (saved) {
      messageApi.success("Note saved successfully!");
    }
  };

  const saveNote = async () => {
    if (isFirstRender.current || !noteData) {
      return false;
    }

    try {
      await updateNote(user.id, noteData);
      return true;
    } catch (error) {
      console.error("Error saving note:", error);
      messageApi.error("Error saving note :(");
      return false;
    }
  };

  const handleDeleteNote = async () => {
    setDeleteLoading(true);
    try {
      const res = await deleteNote(user.id, noteData.noteId);
      if (res?.status === 204) {
        setDeletePopOpen(false);
        navigate("/notes");
      } else {
        throw new Error("Unexpected status code: " + res.status);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
      messageApi.error("Error deleting note :(");
    } finally {
      setDeleteLoading(false);
      setDeletePopOpen(false);
    }
  };
  return (
    <>
      {contextHolder}
      <StyledNote id="StyledNote">
        <StyledNoteHeader id="StyledNoteHeader">
          <Input
            id="note-title"
            variant="borderless"
            className="note-title"
            value={noteData?.noteTitle}
            onChange={(e) =>
              setNoteData({ ...noteData, noteTitle: e.target.value })
            }
          />
          <div className="note-actions">
            <Button onClick={handleSaveNoteClick}>Save</Button>
            <Popconfirm
              title="Delete note"
              description="Are you sure to delete this note?"
              open={deletePopOpen}
              onConfirm={handleDeleteNote}
              okButtonProps={{ loading: deleteLoading }}
              onCancel={() => setDeletePopOpen(false)}
              okText="Yes"
              cancelText="No"
              placement="leftTop"
              icon={<ExclamationCircleFilled style={{ color: "red" }} />}
            >
              <Button danger onClick={() => setDeletePopOpen(true)}>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </div>
        </StyledNoteHeader>

        <StyledEditorContainer id="StyledEditorContainer">
          <TextArea
            id="note-editor"
            className="note-editor"
            value={noteData?.noteContent}
            onChange={(e) =>
              setNoteData({ ...noteData, noteContent: e.target.value })
            }
            rows={4}
            autoSize
            variant="borderless"
          />
        </StyledEditorContainer>
      </StyledNote>
    </>
  );
};

export default Note;
