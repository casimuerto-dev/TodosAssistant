import React from "react";
import "./toggleStyles.css";

const Toggle = ({ toggle, setToggle, userName, setToggleName, loading }) => {
  React.useEffect(() => {
    if (toggle) {
      document.getElementById("root").classList.remove("MyClass");
      document.querySelector(".body").classList.remove("toggledBody");
    } else {
      document.getElementById("root").classList.add("MyClass");
      document.querySelector(".body").classList.add("toggledBody");
    }
  }, [toggle]);

  return (
    <div className="toggleContainer">
      {!loading ? (
        <p
          onClick={() => setToggleName(true)}
          title="Cambia tu nombre!"
          className="userName"
        >
          Hola {userName}!
        </p>
      ) : null}

      <div
        className="toggleButton"
        onClick={() => {
          toggle ? setToggle(false) : setToggle(true);
        }}
      >
        {!toggle ? "Transparente" : "Sólido"}
      </div>
    </div>
  );
};

export { Toggle };
