import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Mösyö");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(0);
  const [names, setNames] = useState([]);

  function changeName() {
    return setFlag(!flag);
  }
  function increment() {
    return setSteps(steps + 1);
    //setSteps((prevState) => prevState + 1);
  }
  function decrement() {
    return setSteps(steps - 1);
  }
  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
  }
  console.log("file: App.js - line 24 - names", names);

  return (
    <div className="App">
      <div>Hello, {flag ? name : ""}</div>
      <button onClick={changeName}>Click Me</button>
      <hr />
      <div>{steps}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <hr />
      <form onSubmit={addNames}>
        <input type="text" value={name} placeholder="add names" onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
