import React, { useState } from "react";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Note from "./componet/Note";
import data from "./assets/js/Fetch.js";
import InputArea from "./componet/InputArea.jsx";

function App() {
  const [notes, setNotes] = useState(data);

  // setup state for listing notes
  function addNote(newNote) {
    const noteToAdd = {
      id: Date.now(),
      ...newNote,
    };
    setNotes([...notes, noteToAdd]);
  }
  console.log(data);
  return (
    <div>
      <Header />
      <InputArea onAdd={addNote} />
      {data.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
