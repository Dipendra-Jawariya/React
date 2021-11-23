import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import Login from "./Components/Login";

function App() {
  const [mode, setmode] = useState("light"); //Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }; //using the setTimeout function to remove the alert from the screen after some time
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#34495e";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setmode("light"); //we cannot  not define set variable with the assignment operator
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  return (
    <>
      {/* <Login />   wanted to add this login page to the side but i am unable to giv it css at a time so i am making it stay on put for some time i will return and complete it ASAP and havong a similar LOGIN page in src folder with css and html*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
          showAlert={showAlert}
          heading="Enter text in here to analyze"
          mode={mode}
        />
        <About />
      </div>
    </>
  );
}

export default App;
