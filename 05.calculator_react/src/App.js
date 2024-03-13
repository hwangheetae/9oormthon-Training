import React from "react";
import Title from "./JS/Title";
import Container from "./JS/Container";
import "./CSS/App.css";

const App = () => {
  console.log("App Component");
  return (
    <div>
      <Title />
      <Container />
    </div>
  );
};

export default App;
