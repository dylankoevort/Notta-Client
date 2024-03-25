const returnPages = () => {
  return pages;
};

const returnPage = (id) => {
  return pages.find((page) => page.id === id);
};

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

const pages = [
  {
    id: 1,
    title: "Page 1",
    content: "This is page 1",
  },
  {
    id: 2,
    title: "Page 2",
    content: "This is page 2",
  },
  {
    id: 3,
    title: "Page 3",
    content: "This is page 3",
  },
  {
    id: 4,
    title: "Page 4",
    content: "This is page 4",
  },
  {
    id: 5,
    title: "Page 5",
    content: "This is page 5",
  },
  {
    id: 6,
    title: "Page 6",
    content: "This is page 6",
  },
  {
    id: 7,
    title: "Page 7",
    content: "This is page 7",
  },
  {
    id: 8,
    title: "Page 8",
    content: "This is page 8",
  },
];

const notes = [
  {
    id: 1,
    title: "Note 1",
    description: "This is note 1",
    children: [returnPage(1), returnPage(2)],
  },
  {
    id: 2,
    title: "Note 2",
    description: "This is note 2",
    children: [returnPage(3), returnPage(4)],
  },
  {
    id: 3,
    title: "Note 3",
    description: "This is note 3",
    children: [returnPage(5), returnPage(6)],
  },
  {
    id: 4,
    title: "Note 4",
    description: "This is note 4",
    children: [returnPage(7), returnPage(8)],
  },
];

const notebooks = [
  {
    id: 1,
    title: "Notebook 1",
    dateCreated: "24 Mar 2024",
    dateUpdated: "25 Mar 2024",
    children: [returnNote(1), returnNote(2)],
  },
  {
    id: 2,
    title: "Notebook 2",
    dateCreated: "25 Mar 2024",
    dateUpdated: "Just now",
    children: [returnNote(3), returnNote(4)],
  },
];

notebooks.forEach((notebook) => {
  notebook.key = notebook.id;
});

export {
  returnPages,
  returnPage,
  returnNotes,
  returnNote,
  returnNotebooks,
  returnNotebook,
};
