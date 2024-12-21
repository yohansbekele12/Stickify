import React, { useEffect, useState } from "react";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Note from "./componet/Note";
import axios from "axios";
import InputArea from "./componet/InputArea.jsx";
import useFetch from "./hooks/useFetch.jsx";
import { v4 as uuidv4 } from "uuid";
import Loading from "./componet/Loading.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  //fetch notes from DB

  const { data, loading, error } = useFetch("http://localhost:3000/api/notes");

  useEffect(() => {
    if (data) {
      setNotes(data);
    }
  }, [data]);

  // setup state for listing notes
  function addNote(newNote) {
    const noteToAdd = {
      id: uuidv4(),
      ...newNote,
    };
    axios
      .post("http://localhost:3000/api/notes", noteToAdd)
      .then((response) => {
        setNotes((prevvalue) => [...prevvalue, response.data]);
      })
      .catch((error) => console.error("Error adding note:", error));
  }

  //function Delete notes
  function DeleteNote(id) {
    axios
      .delete(`http://localhost:3000/api/notes/${id}`) // Pass the ID as part of the URL
      .then((response) => {
        setNotes((prevValue) => {
          return prevValue.filter((note) => note.id !== id); // Remove the deleted note from state
        });
      })
      .catch((error) => {
        console.error("Error deleting note:", error); // Handle any errors
      });
  }

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

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
