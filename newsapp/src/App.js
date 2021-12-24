import "./App.css";

import React, { Component, useState } from "react";
import NavBars from "./Components/NavBars";
import News from "./Components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBars/>
        <News />
      </div>
    );
  }
}

