import React from "react";
import "./TodoItem.css";
export const TodoItem = (props) => {
  return (
    <li
      className={`listItem ${!props.toggle && "MyOtherOtherClass"}`}
      id="forFun"
    >
      <p onClick={props.completeClick} className="checkIcon">
        ✔
      </p>
      <p className={`item ${props.completed && "itemCompleted"}`}>
        {props.text}
      </p>
      <p onClick={props.deleteClick} className="deleteIcon">
        ✗
      </p>
    </li>
  );
};
