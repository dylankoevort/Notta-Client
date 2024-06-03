import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { StyledNotes, StyledNoteContainer, StyledNoteItem } from "./styles";
import { Divider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { TbNotebook } from "react-icons/tb";
import { Link } from "react-router-dom";
import { createNote, getNotesByUserId } from "../../../api";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../components";

const Notes = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      if (!user) return;
      try {
        const res = await getNotesByUserId(user?.id);
        if (res?.data) {
          setNotes(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  const createNewNote = async () => {
    try {
      const res = await createNote(user);
      if (res?.data?.noteId) {
        navigate(`/notes/${res.data.noteId}`);
      }
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledNotes id="StyledNotes">
      <div className="header">
        <span className="title">
          <TbNotebook size={43} />
          <h1>Notes</h1>
        </span>
        <div className="actions">
          <span className="new-note">
            <Button icon={<PlusOutlined />} onClick={createNewNote}>
              New Note
            </Button>
          </span>
        </div>
      </div>

      <Divider />

      <StyledNoteContainer id="StyledNoteContainer">
        {notes.map((note) => (
          <Link key={note.noteId} to={`/notes/${note.noteId}`}>
            <StyledNoteItem
              id={`note-${note.noteId}-${note.noteTitle}`}
              key={note.noteId}
            >
              <h4 className="note-title">{note.noteTitle}</h4>
              <p className="note-content">{note.noteContent}</p>
            </StyledNoteItem>
          </Link>
        ))}
      </StyledNoteContainer>
    </StyledNotes>
  );
};

export default Notes;
