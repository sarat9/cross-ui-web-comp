import logo from './logo.svg';
import React from 'react';

import './App.css';
import "./web-components/FancyButtonWC.js"

function App() {

  function parentFunction (e){
    e.preventDefault();
    console.log("Called Parent Framework Function")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <fancy-button parentvalue={"Hello from React"} parentfunction={parentFunction}></fancy-button>
      </header>
    </div>
  );
}

export default App;
