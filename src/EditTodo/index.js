import React from "react";

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

  const [displayAlert, setDisplayAlert] = React.useState(false);

  const onChange = (e) => {
    setCurrentText(e.target.value);
    setDisplayAlert(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentText !== "") {
      props.updateAfterEdit(currentText, props.toggleEditTodo.todoId);

      setDisplayAlert(false);
      props.setToggleEditTodo({ ...props.toggleEditTodo, status: false });
    } else {
      setDisplayAlert(true);
    }
  };

  function keyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    } else if (e.key === "Escape") {
      props.setToggleEditTodo({ ...props.toggleEditTodo, status: false });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`Form ${!props.toggleTheme && "toggledForm"}`}
    >
      <textarea
        onKeyDown={keyDown}
        autoFocus={true}
        maxLength={"35"}
        onChange={onChange}
        value={currentText}
        className="TodoCreator"
        placeholder="Edita tu tarea!"
      ></textarea>
      {displayAlert && <p className="smallAlert">Porfa escribe algo</p>}
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
          type="submit"
        >
          ¡Guradar!
        </button>
      </div>
    </form>
  );
}
