import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton(props) {
  return (
    <div onClick={props.onClick} className="addTodoButton">
      <p>+</p>
    </div>
  );
}
