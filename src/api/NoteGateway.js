import webService from "./WebService";

export async function getNotesByUserId(userUid) {
  try {
    const params = {
      userUid: userUid,
    };
    const res = await webService.get(`/Note/GetNotesByUserId`, { params });
    return res.data;
  } catch (error) {
    console.error(`Error fetching notes for userUid ${userUid}:`, error);
    throw error;
  }
}

export async function getNoteById(id) {
  try {
    const res = await webService.get(`/Note/GetNoteById/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching note with ID ${id}:`, error);
    throw error;
  }
}

export async function getNoteBySlug(slug) {
  try {
    const params = {
      noteSlug: slug,
    };
    const res = await webService.get(`/Note/GetNoteBySlug`, { params });
    return res.data;
  } catch (error) {
    console.error(`Error fetching note with slug ${slug}:`, error);
    throw error;
  }
}

export async function addNote(user) {
  try {
    const payload = {
      NoteTitle: "Untitled",
      NoteContent: "What's on your mind today?",
      UserUid: user.id,
    };
    const res = await webService.post("/Note/AddNote", payload);
    return res.data;
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
}

export async function updateNote(note) {
  try {
    const params = {
      noteId: note.noteId,
    };
    const res = await webService.put(`/Note/UpdateNote`, note, { params });
    return res;
  } catch (error) {
    console.error(`Error updating note with ID ${id}:`, error);
    throw error;
  }
}

export async function deleteNote(id) {
  try {
    const res = await webService.delete(`/Note/DeleteNote/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error deleting note with ID ${id}:`, error);
    throw error;
  }
}
