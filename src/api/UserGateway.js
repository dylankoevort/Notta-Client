import webService from "./WebService";

/**
 * Retrieves all users from the server.
 */
export async function getUsers() {
  try {
    return await webService.get("/User/GetAllUsers");
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

/**
 * Retrieves a user by their ID.
 *
 * @param {string} userId - The ID of the user to retrieve.
 */
export async function getUserById(userId) {
  try {
    const params = {
      userId,
    };
    return await webService.get(`/User/GetUserById`, { params });
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
}

/**
 * Creates a new user with the given user object.
 *
 * @param {Object} user - The user object containing the user's id, username, and email.
 */
export async function createUser(user) {
  try {
    const payload = {
      UserId: user.id,
      UserName: user.username,
      UserEmail: user.email,
    };
    return await webService.post("/User/CreateUser", payload);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

/**
 * Updates a user with the given user object.
 *
 * @param {Object} user - The user object to update containing the user's id, username, and email.
 */
export async function updateUser(user) {
  try {
    const params = {
      userId: user.id,
    };
    const payload = {
      UserId: user.id,
      UserName: user.username,
      UserEmail: user.email,
    };
    return await webService.put(`/User/UpdateUser`, payload, { params });
  } catch (error) {
    console.error(`Error updating user with ID ${user.id}:`, error);
    throw error;
  }
}

/**
 * Deletes a user with the given userId from the server.
 *
 * @param {string} userId - The ID of the user to delete.
 */
export async function deleteUser(userId) {
  try {
    const params = {
      userId,
    };
    return await webService.delete(`/User/DeleteUser/`, { params });
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    throw error;
  }
}
