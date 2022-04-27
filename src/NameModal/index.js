import React from "react";
import "../TodoForm/TodoForm.css";

export function NameModal(props) {
  const [textValue, setTextValue] = React.useState("");

  const [displayAlert, setDisplayAlert] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textValue !== "") {
      props.setUserName(textValue);
      setDisplayAlert(false);
      props.setToggleName(false);
    } else {
      setDisplayAlert(true);
    }
  };

  function keyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    } else if (e.key === "Escape") {
      props.setToggleName(false);
    }
  }

  let display = false;
  if (textValue.length >= 35) {
    display = true;
  } else {
    display = false;
  }

  return (
    <form
      className={`Form ${!props.toggle && "toggledForm"}`}
      onSubmit={handleSubmit}
    >
      <textarea
        autoFocus={true}
        onKeyDown={keyDown}
        maxLength={"35"}
        value={textValue}
        onChange={(event) => {
          setTextValue(event.target.value);
          setDisplayAlert(false);
        }}
        className="TodoCreator"
        placeholder="Escribe tu nombre!"
      ></textarea>
      {display && (
        <p className="smallAlert">Llegaste al máximo de caracteres!</p>
      )}
      {displayAlert && <p className="smallAlert">Porfa escribe algo</p>}
      <div className="buttonsDiv">
        <button
          className={`CerrarModal ${!props.toggle && "toggledCerrarModal"}`}
          type="button"
          onClick={() => props.setToggleName(false)}
        >
          ✗
        </button>

        <button
          className={`CrearTodo ${!props.toggle && "toggledCrearTodo"}`}
          type="submit"
        >
          Agregar!
        </button>
      </div>
    </form>
  );
}
