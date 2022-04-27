import React from "react";
import "./editTodoStyles.css";

export function EditTodo(props) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      props.updateAfterEdit(currentText, props.toggleEditTodo.todoId);
    } else if (e.key === "Escape") {
      props.setToggleEditTodo({ ...props.toggleEditTodo, status: false });
    }
  }
  const [currentText, setCurrentText] = React.useState(
    props.toggleEditTodo.text
  );
  const onChange = (e) => {
    setCurrentText(e.target.value);
  };

  return (
    <form className={`Form ${!props.toggleTheme && "toggledForm"}`}>
      <textarea
        onKeyDown={handleKeyDown}
        autoFocus={true}
        onChange={onChange}
        value={currentText}
        className="TodoCreator"
        placeholder="Edita tu tarea!"
      ></textarea>

      <div className="buttonsDiv">
        <button
          className={`CerrarModal ${
            !props.toggleTheme && "toggledCerrarModal"
          }`}
          onClick={() => {
            props.setToggleEditTodo({ ...props.toggleEditTodo, status: false });
          }}
        >
          Cancelar
        </button>
        <button
          className={`CrearTodo ${!props.toggleTheme && "toggledCrearTodo"}`}
          onClick={() => {
            props.updateAfterEdit(currentText, props.toggleEditTodo.todoId);
          }}
        >
          ¡Guradar!
        </button>
      </div>
    </form>
  );
}
