import React from "react";
import "../assets/css/styles.css";

function Note(props) {
  return (
    <div className="note">
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
      <button>Read More</button>
    </div>
  );
}

export default Note;
