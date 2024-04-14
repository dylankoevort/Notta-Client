import webService from "./WebService";

export async function getUsers() {
  try {
    const res = await webService.get("/User/GetUsers");
    return res.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function getUserById(id) {
  try {
    const res = await webService.get(`/User/GetUserById/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
}

export async function addUser(user) {
  try {
    const payload = {
      UserId: 0,
      UserUid: user.uid,
      UserName: user.username,
      UserEmail: user.email,
    };
    const res = await webService.post("/User/AddUser", payload);
    return res.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

export async function updateUser(user) {
  try {
    const payload = {
      UserId: user.id,
      UserUid: user.uid,
      UserName: user.username,
      UserEmail: user.email,
    };
    const res = await webService.put(`/User/UpdateUser/${user.id}`, payload);
    return res.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    throw error;
  }
}

export async function deleteUser(id) {
  try {
    const res = await webService.delete(`/User/DeleteUser/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    throw error;
  }
}
