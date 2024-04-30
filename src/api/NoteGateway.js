import webService from "./WebService";

/**
 * Retrieves all notes associated with a given user ID.
 *
 * @param {string} userId - The ID of the user whose notes are being fetched.
 */
export async function getNotesByUserId(userId) {
  try {
    const params = {
      userId,
    };
    return await webService.get(`/Note/GetNotesByUserId`, { params });
  } catch (error) {
    console.error(`Error fetching notes for userId ${userId}:`, error);
    throw error;
  }
}

/**
 * Retrieves a specific note by its ID for a given user.
 *
 * @param {string} userId - The ID of the user who owns the note.
 * @param {string} noteId - The ID of the note to retrieve.
 */
export async function getNoteById(userId, noteId) {
  try {
    const params = {
      userId,
      noteId,
    };
    return await webService.get(`/Note/GetNoteById`, { params });
  } catch (error) {
    console.error(`Error fetching note with ID ${noteId}:`, error);
    throw error;
  }
}

/**
 * Creates a new note for the given user.
 *
 * @param {Object} user - The user object.
 */
export async function createNote(user) {
  try {
    const params = {
      userId: user.id,
    };
    const payload = {
      NoteId: "",
      UserId: user.id,
      NoteTitle: "Untitled",
      NoteContent: "What's on your mind today?",
    };
    return await webService.post("/Note/CreateNote", payload, { params });
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
}

/**
 * Updates a note for a given user.
 *
 * @param {string} userId - The ID of the user.
 * @param {Object} note - The note object to update.
 */
export async function updateNote(userId, note) {
  try {
    const params = {
      userId,
      noteId: note.noteId,
    };
    return await webService.put(`/Note/UpdateNote`, note, { params });
  } catch (error) {
    console.error(`Error updating note with ID ${note.noteId}:`, error);
    throw error;
  }
}

/**
 * Deletes a note for a given user.
 *
 * @param {string} userId - The ID of the user.
 * @param {string} noteId - The ID of the note to delete.
 */
export async function deleteNote(userId, noteId) {
  try {
    const params = {
      userId,
      noteId,
    };
    return await webService.delete(`/Note/DeleteNote`, { params });
  } catch (error) {
    console.error(`Error deleting note with ID ${noteId}:`, error);
    throw error;
  }
}
