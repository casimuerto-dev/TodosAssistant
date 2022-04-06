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
        <h2 className="empty">Crea un TODO!</h2>
      )}

      {props.searchedTodos.length !== 0
        ? props.searchedTodos.map(renderFunction)
        : !props.loading && (
            <h1 className="empty">
              No hay TODOs para mostrar con {`"${props.searchValue}"`}!
            </h1>
          )}
    </ul>
  );
}
