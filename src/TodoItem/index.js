import React from "react";
import "./TodoItem.css";

function getTodosAfterDrag() {
  const allChildren = document.querySelector(".listOfTodos").children;
  return [...allChildren].map((eachTodo) => eachTodo.id);
}

function sendToBottom(id) {
  const completedTodo = document.getElementById(id);
  document.querySelector(".listOfTodos").appendChild(completedTodo);
}

export const TodoItem = (props) => {
  return (
    <li
      onDoubleClick={() =>
        props.setToggleEditTodo({
          status: true,
          text: props.text,
          todoId: props.idCode,
        })
      }
      id={props.idCode}
      onDragStart={(e) => e.target.classList.add("dragging")}
      onDragEnd={(e) => {
        e.target.classList.remove("dragging");

        const newOrder = getTodosAfterDrag();

        props.updateAfterDrag(newOrder);
      }}
      draggable={true}
      className={`listItem ${props.toggle && "MyOtherOtherClass"}`}
    >
      <p
        onClick={() => {
          if (props.completed === false) {
            props.completeClick();
            sendToBottom(props.idCode);
            const newOrder = getTodosAfterDrag();
            props.updateAfterDrag(newOrder);
          } else {
            props.setUncompleteWarning({ status: true, idCode: props.idCode });
          }
        }}
        className="checkIcon"
      >
        ✔
      </p>
      <p className={`item ${props.completed && "itemCompleted"}`}>
        {props.text}
      </p>
      <p
        onClick={() =>
          props.setDeleteWarning({ status: true, idCode: props.idCode })
        }
        className="deleteIcon"
      >
        ✗
      </p>
    </li>
  );
};
