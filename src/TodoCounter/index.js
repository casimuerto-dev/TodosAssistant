import "./TodoCounter.css";
import React from "react";

function TodoCounter({ count, completed }) {
  if (count !== 0) {
    return (
      <h1 className="counter">
        Has completado {completed} de {count} tareas
      </h1>
    );
  } else {
    return <h1 className="counter">No tienes tareas!</h1>;
  }
}

export { TodoCounter };
