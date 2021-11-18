import React, { useState, useEffect } from "react";
// HOOKS are a new addition to react they let you use state and other features without a classc in function based components

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleIclearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = " ";
    setText(newText);
  };
  const handleOnChange = (event) => {
    //with hte help of the onchange event we are able to write something in the textarea and can manipulate that
    // console.log("on Change");
    setText(event.target.value);
  };


  const [text, setText] = useState("");

  // text = "new text";//Wrong way to change the state
  // setText("new text");//correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleIclearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>You text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} character{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3 className="myheading">Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
