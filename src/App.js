import React, {useState} from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import calculate from './logic/calculate.js';
import {default as calState } from "./logic/calculatorState";
function App() {
const [total, setTotal ] = useState(0);
const [next, setNext] = useState(null);
const [operation, setOperation] = useState(null);

const handleClick = (buttomName ) => {
    if(calState(buttomName) === 'num'){
        if (total === 0){
            setTotal(buttomName);
        }
        else setTotal(total + buttomName)
    }
    if(calState(buttomName) === "operation" ){
        setOperation(buttomName);
        setNext(total);
        setTotal(0);
    }
    if(calState(buttomName) === "special"){
        let ans = calculate({total, next, operation},buttomName);
        setTotal(ans)
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
