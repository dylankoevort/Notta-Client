import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const usersCollectionName = "users";

/**
 * Creates a new user in Firestore.
 *
 * @param {Object} user - The user object containing user data.
 * @returns {Promise<Object>} A promise that resolves to the created user object if successful.
 * @throws {Error} If user data is not provided or if an error occurs during the creation process.
 */
export const createUser = async (user) => {
  try {
    if (!user) {
      throw new Error("User data is required");
    }
    const newUser = {
      UserId: user.id,
      UserName: user.username,
      UserEmail: user.primaryEmailAddress.emailAddress,
    };
    const usersCollection = collection(db, usersCollectionName);

    await setDoc(doc(usersCollection, user.id), newUser);

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
