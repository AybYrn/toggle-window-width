import React from "react";
import "./App.css";
import WindowTracker from "./WindowTracker";

export default function App() {
  const [show, setShow] = React.useState(true);

  function handleClick() {
    setShow((prevData) => !prevData);
  }

  return (
    <div className="App--container">
      <button onClick={handleClick}>Toggle Window Tracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
