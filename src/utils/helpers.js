export const generateNewNoteId = (note) => {
  if (!note) {
    throw new Error("Note must be provided");
  }

  if (!note.UserId) {
    throw new Error("User ID must be provided");
  }

  const id =
    getLastNCharacters(note.UserId) +
    "-" +
    generateDateTimeString() +
    "-" +
    generateRandomString();

  return id.toLowerCase();
};

const getLastNCharacters = (input, numberOfCharacters = 6) => {
  if (!input) {
    throw new Error("Input must be provided");
  }

  if (input.length <= numberOfCharacters) {
    return input;
  }

  return input.slice(-numberOfCharacters);
};

const generateRandomString = (length = 6) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const generateDateTimeString = () => {
  const now = new Date();
  return (
    now.getFullYear().toString().slice(-2) +
    ("0" + (now.getMonth() + 1)).slice(-2) +
    ("0" + now.getDate()).slice(-2)
  );
};
