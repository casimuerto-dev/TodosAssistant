import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton(props) {
  return (
    <div
      title="Crea una nueva Tarea!"
      onClick={props.onClick}
      className="addTodoButton"
    >
      <p>+</p>
    </div>
  );
}
