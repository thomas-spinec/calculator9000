import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// components
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title />
    </>
  );
}

export default App;
