import React, { useState } from "react";
import "./myStyle.css";  //we just have to import the css file in the component we have to use 
export default function Login() {
  const handleonChange = (event) => {
    setUsername(event.target.value); //with the help of event.target.value we are setting new value at the target with the help of the event
  };

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");


  return (
    <>
      <div className="box">
        <form action="./src/Textform.js" className="box" method="post">
          <h1>Login</h1>
          <input
            type="text"
            name=""
            value={Username}
            onChange={handleonChange}
            placeholder="Usermname"
          />
          <input
            type="password"
            name=""
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <input type="submit" name="" value="Login" />
        </form>
      </div>
    </>
  );
}
