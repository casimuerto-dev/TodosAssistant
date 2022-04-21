import React from "react";
import "./toggleStyles.css";

const Toggle = ({ toggle, setToggle }) => {
  React.useEffect(() => {
    document.getElementById("root").classList.toggle("MyClass");
    document.querySelector(".body").classList.toggle("toggledBody");
  }, []);
  React.useEffect(() => {
    document.getElementById("root").classList.toggle("MyClass");
    document.querySelector(".body").classList.toggle("toggledBody");
  }, [toggle]);

  return (
    <div className="toggleContainer">
      <div
        className="toggleButton"
        onClick={() => setToggle((prevState) => !prevState)}
      >
        {toggle ? "Transparente" : "Sólido"}
      </div>
    </div>
  );
};

export { Toggle };
