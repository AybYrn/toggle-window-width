import React from "react";

export default function WindowTracker() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <>
      <h3>Window width : {width}</h3>
    </>
  );
}
