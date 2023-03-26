import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
function hello() {
  debugger;
  alert("Hello Alex");
}

function App() {
  console.log("App rendering");

  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

function AppTitle() {
  console.log("AppTitle rendering");
  return <>This is App component</>;
}

function Rating() {
  console.log("Rating rendering");
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  );
}

function Star() {
  console.log("Star rendering");
  return <div>star</div>;
}

export default App;
