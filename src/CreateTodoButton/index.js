import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton(props) {
  return (
    <button onClick={props.onClick} className="addTodoButton">
      +
    </button>
  );
}
