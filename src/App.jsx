import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// components
import Title from "./components/Title";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Title />
      <Calculator />
    </>
  );
}

export default App;
