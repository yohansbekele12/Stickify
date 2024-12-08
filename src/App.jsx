import React from "react";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Note from "./componet/Note";
import data from "./assets/js/Fetch.js"; // Fixed path

function App() {
  console.log(data);
  return (
    <div>
      <Header />
      {data.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
