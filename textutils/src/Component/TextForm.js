import React, { useState } from "react";
// we are importing useState which is a HOOK
// useState is a hook
// REACT HOOK - They let you use state and other React features without writing a class.

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleDownclick = () => {
    console.log("Lowercase was clicked" + text);
    let lowertext = text.toLowerCase();
    setText(lowertext);
  };
  const handleOnChangedown = (event) => {
    console.log("on click");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here"); //state variables
  // we cannot change the state of the text area simply
  //text = "new text"; // wrong way to change the state
  // setText = "new text"; // correct way to change the state

  return (
    <div>
      <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={(handleOnChange, handleOnChangedown)}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary" onClick={handleDownclick}>
        Convert to Lowercase
      </button>
    </div>
  );
}
