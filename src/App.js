import React from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import calculate from './logic/calculate.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Epic Calculator</h1>
        <div id={"calculator_container"}>
          <Display/>
          <ButtonPanel/>
        </div>
      </header>
    </div>
  );
}

export default App;
