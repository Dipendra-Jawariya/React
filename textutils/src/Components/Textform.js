import React, { useState } from "react";
import "./myStyle.css";
// HOOKS are a new addition to react they let you use state and other features without a classc in function based components

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleDownClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleIclearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };
  const handleOnChange = (event) => {
    //with the help of the onchange event we are able to write something in the textarea and can manipulate that
    // console.log("on Change");
    setText(event.target.value);
  };
  const handlecopy = () => {
    // console.log("I am copy");
    navigator.clipboard.writeText(text); //here navigator interface is copy the text with value of the text
    props.showAlert(" Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    // console.log("extra spaces");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed ExtraSpaces!", "success");
  };

  const [text, setText] = useState("");

  // text = "new text";//Wrong way to change the state
  // setText("new text");//correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleDownClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleIclearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handlecopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>You text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} character{" "}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h3 className="myheading">Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
