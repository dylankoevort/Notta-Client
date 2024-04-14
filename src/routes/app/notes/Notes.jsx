import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { StyledNotes, StyledNoteContainer, StyledNoteItem } from "./styles";
import { Divider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { TbNotebook } from "react-icons/tb";
import { returnNotes } from "../../../mockData/mockdata";
import { Link } from "react-router-dom";
import { addNote, getNotesByUserId } from "../../../api";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      if (!user) return;
      try {
        const data = await getNotesByUserId(user?.id);
        if (data) {
          setNotes(data);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  const createNote = async () => {
    try {
      const res = await addNote(user);
      if (res?.noteSlug) {
        navigate(`/notes/${res.noteSlug}`);
      }
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <StyledNotes>
      <div className="header">
        <span className="title">
          <TbNotebook size={43} />
          <h1>Notes</h1>
        </span>
        <div className="actions">
          <span className="new-note">
            <Button icon={<PlusOutlined />} onClick={createNote}>
              New Note
            </Button>
          </span>
        </div>
      </div>

      <Divider />

      <StyledNoteContainer id="note-container">
        {notes.map((note) => (
          <Link key={note.noteId} to={`/notes/${note.noteSlug}`}>
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
