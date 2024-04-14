import webService from "./WebService";
import {
  getNotesByUserId,
  getNoteById,
  addNote,
  updateNote,
  deleteNote,
} from "./NoteGateway";

import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "./UserGateway";

export { webService };
export { getNotesByUserId, getNoteById, addNote, updateNote, deleteNote }; // Note
export { getUsers, getUserById, addUser, updateUser, deleteUser }; // User
