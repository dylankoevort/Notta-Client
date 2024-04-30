import webService from "./WebService";
import {
  getNotesByUserId,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "./NoteGateway";

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./UserGateway";

export { webService };
export { getNotesByUserId, getNoteById, createNote, updateNote, deleteNote }; // Note
export { getUsers, getUserById, createUser, updateUser, deleteUser }; // User
