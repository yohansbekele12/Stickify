import React, { useState } from "react";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Note from "./componet/Note";
import data from "./assets/js/Fetch.js";
import InputArea from "./componet/InputArea.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState(data);

  // setup state for listing notes
  function addNote(newNote) {
    const noteToAdd = {
      id: uuidv4(),
      ...newNote,
    };
    setNotes((prevValue) => {
      return [...prevValue, noteToAdd];
    });
  }

  //function Delete notes
  function DeleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note) => {
        return note.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={DeleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
