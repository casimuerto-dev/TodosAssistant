import "./TodoCounter.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { count, completed } = React.useContext(TodoContext);
  return (
    <h1 className="counter">
      Has completado {completed} de {count} TODOs
    </h1>
  );
}

export { TodoCounter };
