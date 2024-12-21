import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

import "../assets/css/styles.css";

function InputArea(props) {
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
  });
  const [state, setState] = useState({
    rows: "0",
    display: "none",
    isZoom: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  function handleClick() {
    setState({
      rows: "3",
      display: "block",
      isZoom: true,
    });
  }
  return (
    <div className="entryContainer">
      <div className="inputContainer">
        <input
          style={{ display: state.display }}
          type="text"
          onChange={handleChange}
          value={inputValue.title}
          placeholder="Title"
          name="title"
        />

        <textarea
          name="content"
          type="text"
          onClick={handleClick}
          onChange={handleChange}
          value={inputValue.content}
          placeholder="Take a note ..."
          rows={state.rows}
        />
        <Zoom in={state.isZoom}>
          <Fab
            onClick={() => {
              props.onAdd(inputValue);
              setInputValue({ title: "", content: "" });
            }}
          >
            <AddIcon style={{ fill: "white" }} />
          </Fab>
        </Zoom>
      </div>
    </div>
  );
}

export default InputArea;
