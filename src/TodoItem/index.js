import React from "react";
import "./TodoItem.css";

function updateTodosAfterDrag() {
  const allChildren = document.querySelector(".listOfTodos").children;
  console.log(
    allChildren[0].children[1].innerHTML,
    allChildren[1].children[1].innerHTML
  );
}

export const TodoItem = (props) => {
  return (
    <li
      onDragStart={(e) => e.target.classList.add("dragging")}
      onDragEnd={(e) => {
        e.target.classList.remove("dragging");

        updateTodosAfterDrag();
      }}
      draggable={true}
      className={`listItem ${!props.toggle && "MyOtherOtherClass"}`}
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
