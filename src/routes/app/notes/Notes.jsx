import React, { useState, useEffect } from "react";
import { StyledNotes, StyledNoteContainer, StyledNoteItem } from "./styles";
import { Divider } from "antd";
import { TbNotebook } from "react-icons/tb";
import { returnNotes } from "../../../mockData/mockdata";
import { Link } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = returnNotes();
        setNotes(response);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <StyledNotes>
      <div className="header">
        <span className="title">
          <TbNotebook size={43} />
          <h1>Notes</h1>
        </span>

        <Divider />

        <StyledNoteContainer id="note-container">
          {notes.map((note) => (
            <Link key={note.id} to={`/notes/${note.slug}`}>
              <StyledNoteItem
                id={`note-${note.id}-${note.title}`}
                key={note.id}
              >
                <h4 className="note-title">{note.title}</h4>
                <p className="note-content">{note.content}</p>
              </StyledNoteItem>
            </Link>
          ))}
        </StyledNoteContainer>
      </div>
    </StyledNotes>
  );
};

export default Notes;
