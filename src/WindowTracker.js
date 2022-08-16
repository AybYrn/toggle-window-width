import React from "react";

export default function WindowTracker() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <h3>Window width : {width}</h3>
    </>
  );
}
