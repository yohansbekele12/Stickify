import React, { useState } from "react";
import "../assets/css/styles.css";

function InputArea(props) {
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  return (
    <div className="entryContainer">
      <div className="inputContainer">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue.title}
          placeholder="Title"
          name="title"
        />

        <input
          type="text"
          onChange={handleChange}
          value={inputValue.content}
          placeholder="Take a note ..."
          name="content"
        />
        <button
          onClick={() => {
            props.onAdd(inputValue);
            setInputValue({ title: "", content: "" });
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}

export default InputArea;
