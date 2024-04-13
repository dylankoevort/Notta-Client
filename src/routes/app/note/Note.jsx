import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledNote, StyledEditorContainer } from "./styles";
import { returnNoteBySlug } from "../../../mockData/mockdata";
import { Button, message, Popconfirm } from "antd";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Input } from "antd";
import { useDebounce } from "../../../hooks";

const Note = () => {
  let { noteSlug } = useParams();
  const { TextArea } = Input;
  const [noteData, setNoteData] = useState();
  const [editorContent, setEditorContent] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [deletePopOpen, setDeletePopOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Debounce editor content with a delay of 10 seconds
  const debouncedContent = useDebounce(editorContent, 10000);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = returnNoteBySlug(noteSlug);
        setNoteData(response);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };
    fetchNote();
  }, [noteSlug]);

  useEffect(() => {
    if (noteData?.content) {
      setEditorContent(noteData.content);
    }
  }, [noteData]);

  useEffect(() => {
    // Log debounced content changes
    const data = {
      time: Date.now(),
      title: noteData?.title,
      content: debouncedContent,
    };
    console.log(data);
    // messageApi.success("Note saved!");
  }, [debouncedContent]);

  const saveNote = async () => {
    const key = "key";

    messageApi.destroy();

    messageApi.open({
      key,
      type: "loading",
      content: "Saving note...",
    });

    try {
      // save note to db

      setTimeout(() => {
        messageApi.open({
          key,
          type: "success",
          content: "Note saved!",
          duration: 2,
        });
      }, 1000);
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
        <div className="header">
          <h1 id="note-title">{noteData?.title}</h1>
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
        </div>

        <StyledEditorContainer id="StyledEditorContainer">
          <TextArea
            id="note-editor"
            className="note-editor"
            value={editorContent}
            onChange={(e) => setEditorContent(e.target.value)}
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
