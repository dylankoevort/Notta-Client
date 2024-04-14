import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledNote, StyledNoteHeader, StyledEditorContainer } from "./styles";
import { Button, message, Popconfirm } from "antd";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Input } from "antd";
import { useDebounce } from "../../../hooks";
import { getNoteBySlug, updateNote } from "../../../api/NoteGateway";

const Note = () => {
  let { noteSlug } = useParams();
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
        const res = await getNoteBySlug(noteSlug);
        if (res) {
          setNoteData(res);
        }
      } catch (error) {
        console.error("Error fetching note:", error);
        navigate("/notes");
      }
    };

    fetchNote();
  }, [noteSlug]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    saveNote();
  }, [debouncedContent, debouncedTitle]);

  const saveNote = async () => {
    if (isFirstRender.current) {
      return;
    }

    const key = "key";
    messageApi.destroy();
    messageApi.open({
      key,
      type: "loading",
      content: "Saving note...",
    });

    try {
      const res = await updateNote(noteData);

      if (res?.status === 200) {
        messageApi.open({
          key,
          type: "success",
          content: "Note saved!",
          duration: 2,
        });
      }
    } catch (error) {
      console.error("Error saving note:", error);
      messageApi.error("Error saving note :(");
    }
  };

  const deleteNote = async () => {
    setDeleteLoading(true);
    try {
      // delete note from db
      // navigate to notes route

      setTimeout(() => {
        setDeletePopOpen(false);
        setDeleteLoading(false);
        messageApi.success("Note deleted!");
      }, 2000);
    } catch (error) {
      console.error("Error deleting note:", error);
      setDeletePopOpen(false);
      setDeleteLoading(false);
      messageApi.error("Error deleting note :(");
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
            <Button onClick={saveNote}>Save</Button>
            <Popconfirm
              title="Delete note"
              description="Are you sure to delete this note?"
              open={deletePopOpen}
              onConfirm={deleteNote}
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
