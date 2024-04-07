import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledNote } from "./styles";
import { returnNoteBySlug } from "../../../mockData/mockdata";

const Note = () => {
  let { noteSlug } = useParams();
  const [noteData, setNoteData] = useState();

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
    let counter = 0;
    const saveInterval = setInterval(() => {
      counter++;
      console.log("Logging time: " + counter);
    }, 10000); // 1000 = 1s
    return () => clearInterval(saveInterval);
  }, []);

  useEffect(() => {
    if (noteData?.content) {
      let text = noteData.content.replace(/\n\n/g, "<br><br>");
      document.getElementById("note-content").innerHTML = text;
    }
  }, [noteData]);

  return (
    <StyledNote>
      <h1>{noteData?.title}</h1>
      <p id="note-content"></p>
    </StyledNote>
  );
};

export default Note;
