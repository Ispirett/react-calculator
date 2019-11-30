import React, {useState} from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import calculate from './logic/calculate.js';
import {default as calState } from "./logic/calculatorState";

function App() {
const [total, setTotal ] = useState(0);
const [next, setNext] = useState(0);
const [operation, setOperation] = useState(null);

const handleClick = (buttonName ) => {
    if(calState(buttonName) === 'num'){
        if (total === next){
            setTotal(buttonName);
        }
        else setTotal(total + buttonName)
    }
    if(calState(buttonName) === "operation" ){
        setOperation(buttonName);
        setNext(total);

    }
    if(calState(buttonName) === "special"){
        const ans = calculate({total: Number(total), next: Number(next), operation},buttonName);
        console.log(total, next, operation)
        setTotal(ans);
        setNext(0);
        setOperation(null)
    }

};


  return (
    <div className="App">
      <header className="App-header">
        <h1>Epic Calculator</h1>
        <div id={"calculator_container"}>
          <Display value={total}/>
          <ButtonPanel clickHandler={(data) => handleClick(data)}/>
        </div>
      </header>
    </div>
  );
}

export default App;
