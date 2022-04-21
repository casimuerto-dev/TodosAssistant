import "./TodoCounter.css";
import React from "react";

function TodoCounter({ count, completed, toggle }) {
  if (count !== 0) {
    return (
      <h1 className={`counter ${!toggle && "MyOtherClass"}`}>
        Has completado {completed} de {count} tareas
      </h1>
    );
  } else {
    return (
      <h1 className={`counter ${!toggle && "MyOtherClass"}`}>
        No tienes tareas!
      </h1>
    );
  }
}

export { TodoCounter };
