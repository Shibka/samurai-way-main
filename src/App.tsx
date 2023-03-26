import React from "react";
import "./App.css";

function hello() {
  debugger;
  alert("Hello Alex");
}

function App() {
  debugger;
  return (
    <div>
      Hello, samurai! Let's go!
      <Rating />
      <Accordion />
    </div>
  );
}

function Rating() {
  debugger;
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Accordion() {
  debugger;
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

function Star() {
  return <div>Star</div>;
}

export default App;
