import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { StyledNotes, StyledNoteContainer, StyledNoteItem } from "./styles";
import { Divider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { TbNotebook } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../components";
import { getNotesByUserId, createNote } from "../../../api/NoteRepository";

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
        if (res) {
          setNotes(res);
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
      const res = await createNote(user?.id);
      if (res?.NoteId) {
        navigate(`/notes/${res.NoteId}`);
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
          <Link key={note.NoteId} to={`/notes/${note.NoteId}`}>
            <StyledNoteItem
              id={`note-${note.NoteId}-${note.noteTitle}`}
              key={note.NoteId}
            >
              <h4 className="note-title">{note.NoteTitle}</h4>
              <p className="note-content">{note.NoteContent}</p>
            </StyledNoteItem>
          </Link>
        ))}
      </StyledNoteContainer>
    </StyledNotes>
  );
};

export default Notes;
