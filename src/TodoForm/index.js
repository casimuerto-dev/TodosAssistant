import React from "react";
import "./TodoForm.css";

export function TodoForm({ addTodo, onModalOpen, toggle }) {
  const [textValue, setTextValue] = React.useState("");

  const [displayAlert, setDisplayAlert] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textValue !== "") {
      addTodo(textValue);
      setTextValue("");
      setDisplayAlert(false);
      onModalOpen();
    } else {
      setDisplayAlert(true);
    }
  };
  let display = false;
  if (textValue.length >= 35) {
    display = true;
  } else {
    display = false;
  }

  return (
    <form className={`Form ${toggle && "toggledForm"}`} onSubmit={handleSubmit}>
      <textarea
        maxLength={"35"}
        value={textValue}
        onChange={(event) => {
          setTextValue(event.target.value);
          setDisplayAlert(false);
        }}
        className="TodoCreator"
        placeholder="Escribe tu nueva tarea!"
      ></textarea>
      {display && (
        <p className="smallAlert">Llegaste al máximo de caracteres!</p>
      )}
      {displayAlert && <p className="smallAlert">Porfa escribe algo</p>}
      <div className="buttonsDiv">
        <button
          className={`CrearTodo ${toggle && "toggledCrearTodo"}`}
          type="submit"
        >
          Agregar!
        </button>
        <button
          className={`CerrarModal ${toggle && "toggledCerrarModal"}`}
          type="button"
          onClick={onModalOpen}
        >
          ✗
        </button>
      </div>
    </form>
  );
}
