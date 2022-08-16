import React from "react";
import "./App.css";

function App() {
  const [show, setShow] = React.useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleClick() {
    setShow((prevData) => !prevData);
  }

  React.useEffect(() => {
    window.addEventListener("resize", function(){
      setWidth(window.innerWidth)
    })
  }, [])

  return (
    <div className="App--container">
      <button onClick={handleClick}>Toggle Window Tracker</button>
      { show && <h3>Window width : {width}</h3>}
    </div>
  );
}

export default App;
