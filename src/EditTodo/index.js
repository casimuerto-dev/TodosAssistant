import React from "react";
import "./editTodoStyles.css";

export function EditTodo(props) {
  const [currentText, setCurrentText] = React.useState(
    props.toggleEditTodo.text
  );
  const onChange = (e) => {
    setCurrentText(e.target.value);
  };

  return (
    <div className="editDiv">
      <input onChange={onChange} value={currentText}></input>
      <button
        onClick={() => {
          console.log(props.toggleEditTodo.todoId);
          props.updateAfterEdit(currentText, props.toggleEditTodo.todoId);
        }}
      >
        Guradar Cambios
      </button>
      <button
        onClick={() => {
          props.setToggleEditTodo({ ...props.toggleEditTodo, status: false });
        }}
      >
        Cancelar
      </button>
    </div>
  );
}
