import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { generateNewNoteId } from "../utils/helpers";

const usersCollectionName = "users";
const notesCollectionName = "notes";

/**
 * Fetches all notes from Firestore.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of all notes,
 *                                   or an empty array if there are no notes.
 */
export const getAllNotes = async () => {
  const allNotes = [];

  try {
    const usersCollection = collection(db, usersCollectionName);
    const usersQuerySnapshot = await getDocs(usersCollection);

    for (const userDocument of usersQuerySnapshot.docs) {
      const notesCollection = collection(userDocument.ref, notesCollectionName);

      const notesQuerySnapshot = await getDocs(notesCollection);

      notesQuerySnapshot.forEach((noteDocument) => {
        allNotes.push(noteDocument.data());
      });
    }

    return allNotes;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

/**
 * Retrieves a specific note by its ID and user ID from Firestore.
 *
 * @param {string} userId - The ID of the user who owns the note.
 * @param {string} noteId - The ID of the note to retrieve.
 * @returns {Promise<Object | null>} A promise that resolves to the note object if found,
 *                                    or null if the note does not exist.
 */
export const getNoteById = async (userId, noteId) => {
  try {
    const userRef = doc(db, usersCollectionName, userId);
    const noteDocument = doc(collection(userRef, notesCollectionName), noteId);
    const documentSnapshot = await getDoc(noteDocument);

    if (documentSnapshot.exists()) {
      return documentSnapshot.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching note: ", error);
    return null;
  }
};

/**
 * Fetches all notes belonging to a specific user ID from Firestore.
 *
 * @param {string} userId - The ID of the user whose notes to fetch.
 * @returns {Promise<Array<Object> | null>} A promise that resolves to an array of notes belonging to the user,
 *                                           or null if the user ID is not provided or if an error occurs.
 */
export const getNotesByUserId = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    const userRef = doc(db, usersCollectionName, userId);
    const notesCollection = collection(userRef, notesCollectionName);
    const querySnapshot = await getDocs(notesCollection);

    const notes = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return notes;
  } catch (error) {
    console.error("Error fetching notes: ", error);
    return null;
  }
};

/**
 * Creates a new note for a given user ID.
 *
 * @param {string} userId - The ID of the user for whom the note is created.
 * @returns {Promise<Object | null>} A promise that resolves to the created note object if successful,
 *                                    or null if the user ID is not provided or if an error occurs.
 */
export const createNote = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    const note = {
      NoteId: "",
      UserId: userId,
      NoteTitle: "Untitled",
      NoteContent: "What's on your mind today?",
    };

    const userRef = doc(db, usersCollectionName, userId);
    const notesCollection = collection(userRef, notesCollectionName);

    note.NoteId = generateNewNoteId(note).toUpperCase();
    note.UserId = userId;
    note.NotebookId = "nb_" + userId;
    note.DateCreated = new Date().toISOString();
    note.DateUpdated = new Date().toISOString();

    await setDoc(doc(notesCollection, note.NoteId), note);

    return note;
  } catch (error) {
    console.error("Error creating note: ", error);
    return null;
  }
};

/**
 * Updates an existing note with new data.
 *
 * @param {string} userId - The ID of the user who owns the note.
 * @param {Object} note - The updated note object.
 * @returns {Promise<Object | null>} A promise that resolves to the updated note object if successful,
 *                                    or null if an error occurs.
 */
export const updateNote = async (userId, note) => {
  try {
    const userRef = doc(db, usersCollectionName, userId);
    const noteDocument = doc(
      collection(userRef, notesCollectionName),
      note.NoteId
    );

    note.NotebookId = "nb_" + userId;
    note.DateUpdated = new Date().toISOString();

    await setDoc(noteDocument, note, { merge: true });
    return note;
  } catch (error) {
    console.error("Error updating note: ", error);
    return null;
  }
};

/**
 * Deletes a note document from Firestore.
 *
 * @param {string} userId - The ID of the user who owns the note.
 * @param {string} noteId - The ID of the note document to delete.
 * @returns {Promise<string | Error>} A promise that resolves to "success" if the deletion is successful,
 *                                   otherwise resolves to an Error object containing the error message.
 */
export const deleteNote = async (userId, noteId) => {
  try {
    const userRef = doc(db, usersCollectionName, userId);
    const noteDocument = doc(collection(userRef, notesCollectionName), noteId);

    await deleteDoc(noteDocument);

    return "success";
  } catch (error) {
    console.error("Error deleting note: ", error);
    return error;
  }
};
