import "./TodoCounter.css";
import React from "react";

function TodoCounter({ count, completed }) {
  return (
    <h1 className="counter">
      Has completado {completed} de {count} TODOs
    </h1>
  );
}

export { TodoCounter };
