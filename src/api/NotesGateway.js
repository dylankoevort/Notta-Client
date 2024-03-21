import webService from "./WebService";

export async function getNotes() {
  try {
    const res = await webService.get("/Notes");
    return res.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
}

export async function getNote(id) {
  try {
    const res = await webService.get(`/Notes/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching note with ID ${id}:`, error);
    throw error;
  }
}

export async function addNote(note) {
  try {
    const res = await webService.post("/Notes", note);
    return res.data;
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
}

export async function updateNote(id, note) {
  try {
    const res = await webService.put(`/Notes/${id}`, note);
    return res.data;
  } catch (error) {
    console.error(`Error updating note with ID ${id}:`, error);
    throw error;
  }
}

export async function deleteNote(id) {
  try {
    const res = await webService.delete(`/Notes/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error deleting note with ID ${id}:`, error);
    throw error;
  }
}
