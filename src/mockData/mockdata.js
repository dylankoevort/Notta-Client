const returnNotes = () => {
  return notes;
};

const returnNote = (id) => {
  return notes.find((note) => note.id === id);
};

const returnNoteBySlug = (slug) => {
  return notes.find((note) => note.slug === slug);
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
    title: "Meeting Notes",
    content:
      "Today's meeting was quite productive. We discussed the upcoming project deadlines and assigned tasks to each team member. It was decided that we would have weekly check-ins to monitor progress and address any issues that may arise. Additionally, we brainstormed some innovative ideas for the project and outlined a plan for implementation. Overall, I'm feeling optimistic about our team's ability to deliver excellent results.",
    slug: "note1",
  },
  {
    id: 2,
    title: "Personal Reflections",
    content:
      "Lately, I've been reflecting on my personal goals and aspirations. I realize that I need to prioritize self-care and find a better work-life balance. It's easy to get caught up in the hustle and bustle of everyday life, but it's important to take a step back and focus on what truly matters. I plan to start incorporating more mindfulness practices into my daily routine and spending quality time with loved ones. By prioritizing my well-being, I believe I'll be better equipped to tackle challenges and pursue my dreams with renewed energy and enthusiasm.",
    slug: "note2",
  },
  {
    id: 3,
    title: "Book Recommendations",
    content:
      "I recently finished reading 'Atomic Habits' by James Clear, and I must say it's one of the most insightful books I've ever come across. Clear provides practical strategies for building good habits and breaking bad ones, backed by scientific research. His writing style is engaging and easy to understand, making it accessible to readers of all backgrounds. I highly recommend this book to anyone looking to make positive changes in their life and achieve their goals.",
    slug: "note3",
  },
  {
    id: 4,
    title: "Travel Plans",
    content:
      "I'm thrilled to announce that I've booked a trip to Japan next month! It's been a dream of mine to visit Japan for years, and I can't wait to immerse myself in the rich culture and explore the beautiful landscapes. I've already started researching must-see attractions and traditional Japanese cuisine to try. I'm especially excited to visit Kyoto and experience the serene beauty of its temples and gardens. This trip is sure to be an unforgettable adventure.",
    slug: "note4",
  },
  {
    id: 5,
    title: "Project Ideas",
    content:
      "I've been brainstorming some new project ideas to work on in my spare time. One concept that stands out to me is developing a mobile app that helps users track their daily water intake and encourages them to stay hydrated. I believe this could be a valuable tool for promoting better health and wellness habits. I'm also considering starting a blog where I can share my insights and experiences on topics like productivity, personal development, and travel. Overall, I'm excited to explore these ideas further and see where they lead me.",
    slug: "note5",
  },
  {
    id: 6,
    title: "World War II History",
    content:
      "World War II, spanning from 1939 to 1945, remains one of the most significant events in human history, reshaping the geopolitical landscape and leaving an indelible mark on countless lives. The war was characterized by unprecedented levels of destruction, with millions of soldiers and civilians perishing in the conflict. At its core, the war stemmed from complex political tensions, territorial disputes, and the rise of totalitarian regimes across Europe and Asia.\n\nThe war can be divided into two major theaters: the European Theater and the Pacific Theater. In Europe, the conflict began with the invasion of Poland by Nazi Germany, triggering a chain reaction of alliances and declarations of war. The subsequent years saw intense battles and strategic maneuvers, including the Battle of Stalingrad, the Siege of Leningrad, and the D-Day invasion of Normandy. Meanwhile, in the Pacific, Japan's expansionist ambitions led to conflicts across the Asia-Pacific region, culminating in the bombing of Pearl Harbor and the subsequent Pacific island-hopping campaigns.\n\nWorld War II witnessed the implementation of devastating weaponry and tactics, including aerial bombings, chemical warfare, and the use of atomic bombs on Hiroshima and Nagasaki. The human cost of the war was staggering, with estimates of over 70 million fatalities, including both military personnel and civilians. The aftermath of the war brought about profound geopolitical shifts, the establishment of the United Nations, and the beginning of the Cold War between the Allied powers and the Soviet Union.\n\nDecades later, World War II continues to shape global politics, culture, and memory. The lessons learned from the war emphasize the importance of diplomacy, international cooperation, and the preservation of human rights. Memorials, museums, and historical scholarship serve as reminders of the sacrifices made during this tumultuous period, ensuring that the legacy of World War II is never forgotten.",
    slug: "note6",
  },
  {
    id: 7,
    title: "Crypto and Investing",
    content:
      "In recent years, the world of finance has been revolutionized by the emergence of cryptocurrencies and blockchain technology. Bitcoin, the first decentralized digital currency, was introduced in 2009 by an anonymous individual or group known as Satoshi Nakamoto. Since then, thousands of cryptocurrencies have been created, each with its own unique features and applications.\n\nThe appeal of cryptocurrencies lies in their decentralized nature, enabling peer-to-peer transactions without the need for intermediaries such as banks or governments. This offers greater financial autonomy and privacy to users, particularly in regions with unstable or restrictive banking systems. Additionally, cryptocurrencies are often touted as a hedge against inflation and a store of value, similar to precious metals like gold.\n\nHowever, the volatile nature of the cryptocurrency market presents both opportunities and risks for investors. Prices can fluctuate dramatically within short periods, driven by factors such as market sentiment, regulatory developments, and technological advancements. While some investors have profited immensely from the meteoric rise of cryptocurrencies, others have suffered significant losses due to market crashes and security breaches.\n\nDespite the challenges, many traditional investors are increasingly diversifying their portfolios to include cryptocurrencies as a speculative asset class. Additionally, institutional adoption of cryptocurrencies is on the rise, with major financial institutions and corporations exploring blockchain-based solutions for payments, supply chain management, and digital asset custody.\n\nAs the cryptocurrency market continues to evolve, investors must exercise caution and conduct thorough research before entering the space. Fundamental analysis, technical analysis, and risk management strategies are essential tools for navigating the complexities of cryptocurrency investing. Moreover, staying informed about regulatory developments and emerging trends can help mitigate potential risks and capitalize on investment opportunities in this dynamic market.",
    slug: "note7",
  },
  {
    id: 8,
    title: "Data Structures and Algorithms",
    content:
      "Data structures and algorithms form the backbone of computer science, serving as fundamental building blocks for designing efficient and scalable software systems. A data structure is a way of organizing and storing data in a computer's memory, while an algorithm is a step-by-step procedure for solving a specific computational problem.\n\nOne of the most fundamental data structures is the array, which stores elements of the same data type in contiguous memory locations. Arrays offer constant-time access to individual elements but may suffer from limitations in terms of size and flexibility. Linked lists, on the other hand, overcome these limitations by storing elements in separate nodes with pointers pointing to the next node in the sequence. This allows for dynamic memory allocation and efficient insertion and deletion operations.\n\nAnother essential data structure is the stack, which follows the Last In, First Out (LIFO) principle and supports operations such as push (adding an element to the top) and pop (removing the top element). Stacks are commonly used in applications such as expression evaluation, function call management, and backtracking algorithms. Queues, on the other hand, adhere to the First In, First Out (FIFO) principle and support operations such as enqueue (adding an element to the rear) and dequeue (removing the front element). Queues find applications in scenarios such as task scheduling, breadth-first search, and message queuing systems.\n\nIn addition to these basic data structures, computer scientists often utilize more complex structures such as trees, graphs, and hash tables to solve a wide range of problems efficiently. Trees are hierarchical data structures with a root node and branching nodes called children, making them suitable for representing hierarchical relationships and organizing hierarchical data. Graphs, on the other hand, consist of vertices and edges and are used to model relationships between entities in a network. Hash tables offer fast access to data through key-value pairs and are commonly used for implementing associative arrays and dictionaries.\n\nWhen designing algorithms, computer scientists analyze factors such as time complexity, space complexity, and scalability to ensure optimal performance and resource utilization. Techniques such as divide and conquer, dynamic programming, and greedy algorithms are employed to solve problems ranging from sorting and searching to optimization and graph traversal. By mastering data structures and algorithms, software engineers can develop robust and efficient solutions to real-world problems, laying the groundwork for advancements in technology and innovation.",
    slug: "note8",
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
  returnNoteBySlug,
  returnNotebooks,
  returnNotebook,
  returnCollections,
  returnCollection,
};
