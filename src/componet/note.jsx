import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "../assets/css/styles.css";

function Note(props) {
  return (
    <div className="note">
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
