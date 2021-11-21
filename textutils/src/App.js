import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light"); //Wheather dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setmode('light'); //we cannot  not define set variable with the assignment operator
      document.body.style.backgroundColor = 'white';

    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter text in here to analyze"  mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
