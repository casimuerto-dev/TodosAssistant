import React from "react";
import "./TodoList.css";

function getDragAfterElement(container, yPosition) {
  const dragElementsInsideContainer = [
    ...container.querySelectorAll(".listItem:not(.dragging)"),
  ];
  return dragElementsInsideContainer.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = yPosition - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
}

export function TodoList(props) {
  const renderFunction = props.render || props.children;

  return (
    <ul
      onDragOver={(e) => {
        e.preventDefault();
        const ElementsContainer = document.querySelector(".listOfTodos");

        const afterElement = getDragAfterElement(ElementsContainer, e.clientY);

        if (afterElement == null) {
          ElementsContainer.appendChild(document.querySelector(".dragging"));
        } else {
          ElementsContainer.insertBefore(
            document.querySelector(".dragging"),
            afterElement
          );
        }
      }}
      onDragEnd={() => console.log("drag end")}
      className={`listOfTodos ${
        props.searchActivated === true ? "activated" : ""
      } ${props.loading && "loadingList"} ${
        !props.toggle && "listOfTodosToggled"
      }`}
    >
      {props.error && props.onError()}
      {!props.loading && props.count === 0 && (
        <h2 className={`empty ${!props.toggle && "toggledEmpty"}`}>
          Crea una tarea!
        </h2>
      )}

      {props.searchedTodos.length !== 0 && !props.loading ? (
        props.searchedTodos.map(renderFunction)
      ) : !props.loading && props.count !== 0 ? (
        <h1 className={`empty ${!props.toggle && "toggledEmpty"}`}>
          No hay tareas para mostrar con {`'${props.searchValue}'.`}
        </h1>
      ) : null}
    </ul>
  );
}
