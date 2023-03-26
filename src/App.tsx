import React from "react";
import "./App.css";

function hello() {
  debugger;
  alert("Hello Alex");
}
hello();

function App() {
  return <div>Hello, samurai! Let's go!</div>;
}

function Rating() {
  return (
    <div>
      <div>Start</div>
      <div>Start</div>
      <div>Start</div>
      <div>Start</div>
      <div>Start</div>
    </div>
  );
}

function Accordion() {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
