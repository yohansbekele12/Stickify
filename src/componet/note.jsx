import React from "react";
import "../assets/css/styles.css";
import notes from "../assets/js/Fetch";

function Note() {
  console.log(notes);
  function extendisplay() {
    console.log("Extended display");
    // Add your code to extend the display here
  }

  return (
    <div className="card_container">
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <p className="title">{note.title}</p>
          <p className="content">{note.content}</p>
          <button onClick={extendisplay}>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Note;
