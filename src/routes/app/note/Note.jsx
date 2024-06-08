import React, { useState, useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledNote, StyledNoteHeader, StyledEditorContainer } from "./styles";
import { Button, message, Popconfirm } from "antd";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Input } from "antd";
import { useDebounce } from "../../../hooks";
import { Spinner } from "../../../components";
import {
  getNoteById,
  updateNote,
  deleteNote,
} from "../../../api/NoteRepository";

const Note = () => {
  let { noteId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();
  const { TextArea } = Input;
  const [messageApi, contextHolder] = message.useMessage();
  const isFirstRender = useRef(true);

  const [isLoading, setIsLoading] = useState(true);
  const [noteData, setNoteData] = useState();
  const [deletePopOpen, setDeletePopOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const debouncedTitle = useDebounce(noteData?.NoteTitle, 5000);
  const debouncedContent = useDebounce(noteData?.NoteContent, 10000);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setIsLoading(true);
        const res = await getNoteById(user.id, noteId);
        if (res) {
          setNoteData(res);
          setIsLoading(false);
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
      const res = await deleteNote(user.id, noteData.NoteId);
      if (res === "success") {
        setDeletePopOpen(false);
        navigate("/notes");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
      messageApi.error("Error deleting note :(");
    } finally {
      setDeleteLoading(false);
      setDeletePopOpen(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {contextHolder}
      <StyledNote id="StyledNote">
        <StyledNoteHeader id="StyledNoteHeader">
          <Input
            id="note-title"
            variant="borderless"
            className="note-title"
            value={noteData?.NoteTitle}
            onChange={(e) =>
              setNoteData({ ...noteData, NoteTitle: e.target.value })
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
            value={noteData?.NoteContent}
            onChange={(e) =>
              setNoteData({ ...noteData, NoteContent: e.target.value })
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
