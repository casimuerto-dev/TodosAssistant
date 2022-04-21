import React from "react";
import "./TodoList.css";

export function TodoList(props) {
  const renderFunction = props.render || props.children;

  return (
    <ul
      className={`listOfTodos ${
        props.searchActivated === true ? "activated" : ""
      } ${props.loading && "loadingList"}`}
    >
      {props.error && props.onError()}
      {!props.loading && props.count === 0 && (
        <h2 className={`empty ${props.toggle && "toggledEmpty"}`}>
          Crea una tarea!
        </h2>
      )}

      {props.searchedTodos.length !== 0 && !props.loading ? (
        props.searchedTodos.map(renderFunction)
      ) : !props.loading && props.count !== 0 ? (
        <h1 className={`empty ${props.toggle && "toggledEmpty"}`}>
          No hay tareas para mostrar con {`'${props.searchValue}'.`}
        </h1>
      ) : null}
    </ul>
  );
}
