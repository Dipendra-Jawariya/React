import React, { useState } from "react";

export default function Login() {
  const handleonChange = (event) => {
    setUsername(event.target.value); //with the help of event.target.value we are setting new value at the target with the help of the event
  };



  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const[newEntry,setnewEntry]=useState([]);





  return (
    <>
      <form action="/public/index.html"  className="box" method="post">
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
    </>
  );
}
