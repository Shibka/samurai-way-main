import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { Rating as R } from "./components/Rating/Rating";

function App() {
  console.log("App rendering");

  return (
    <div>
      <input />

      <AppTitle />
      <R />
      <Accordion />
      <R />
    </div>
  );
}

function AppTitle() {
  console.log("AppTitle rendering");
  return <>This is App component</>;
}

export default App;
