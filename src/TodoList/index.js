import React from "react";
import "./TodoList.css";

export function TodoList(props) {
  return (
    <ul
      className={`listOfTodos ${
        props.searchActivated === true ? "activated" : ""
      } ${props.loading && "loadingList"}`}
    >
      {props.children}
    </ul>
  );
}
