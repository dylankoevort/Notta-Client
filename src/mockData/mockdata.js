const returnNotes = () => {
  return notes;
};

const returnNote = (id) => {
  return notes.find((note) => note.id === id);
};

const returnNotebooks = () => {
  return notebooks;
};

const returnNotebook = (id) => {
  return notebooks.find((notebook) => notebook.id === id);
};

const returnCollections = () => {
  return collections;
};

const returnCollection = (id) => {
  return collections.find((collection) => collection.id === id);
};

const notes = [
  {
    id: 1,
    title: "Notes 1",
    content: "This is note 1",
  },
  {
    id: 2,
    title: "Notes 2",
    content: "This is note 2",
  },
  {
    id: 3,
    title: "Notes 3",
    content: "This is note 3",
  },
  {
    id: 4,
    title: "Notes 4",
    content: "This is note 4",
  },
  {
    id: 5,
    title: "Notes 5",
    content: "This is note 5",
  },
  {
    id: 6,
    title: "Notes 6",
    content: "This is note 6",
  },
  {
    id: 7,
    title: "Notes 7",
    content: "This is note 7",
  },
  {
    id: 8,
    title: "Notes 8",
    content: "This is note 8",
  },
];

const notebooks = [
  {
    id: 1,
    title: "Notebook 1",
    description: "This is notebook 1",
    children: [returnNote(1), returnNote(2)],
  },
  {
    id: 2,
    title: "Notebook 2",
    description: "This is notebook 2",
    children: [returnNote(3), returnNote(4)],
  },
  {
    id: 3,
    title: "Notebook 3",
    description: "This is notebook 3",
    children: [returnNote(5), returnNote(6)],
  },
  {
    id: 4,
    title: "Notebook 4",
    description: "This is notebook 4",
    children: [returnNote(7), returnNote(8)],
  },
];

const collections = [
  {
    id: 1,
    title: "Collection 1",
    dateCreated: "24 Mar 2024",
    dateUpdated: "25 Mar 2024",
    children: [returnNotebook(1), returnNotebook(2)],
  },
  {
    id: 2,
    title: "Collection 2",
    dateCreated: "25 Mar 2024",
    dateUpdated: "Just now",
    children: [returnNotebook(3), returnNotebook(4)],
  },
];

collections.forEach((collection) => {
  collection.key = collection.id;
});

export {
  returnNotes,
  returnNote,
  returnNotebooks,
  returnNotebook,
  returnCollections,
  returnCollection,
};
