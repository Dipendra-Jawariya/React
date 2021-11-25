import React, { useState } from "react";
import "./myStyle.css";
export default function Login() {
  const handleonChange = (event) => {
    setUsername(event.target.value); //with the help of event.target.value we are setting new value at the target with the help of the event
  };

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  // let first = {
  //   margin: "0",
  //   padding: 0,
  //   "font-family": "sans-serif",
  //   background: "#34495e",
  // };
  // let h1style = {
  //   color: "white",
  //   textTransform: "uppercase",
  //   fontWeight: "500",
  // };

  // let mystyle = {
  //   width: "300px",
  //   padding: "40px",
  //   position: "absolute",
  //   top: "40%",
  //   left: "40%",
  //   transform: "trnaslate(-50%,-50%)",
  //   background: "#191919",
  //   "text-align": "center",
  //   "border-radius": "23%",
  // };

  return (
    <>
      <div className="box">
        <form action="/public/index.html" className="box" method="post">
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
