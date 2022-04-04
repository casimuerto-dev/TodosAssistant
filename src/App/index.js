import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const todos = [
//   { text: "cortar cebolla", complete: false },
//   { text: "tomar curso intro react", complete: false },
//   { text: "llorar con la llorona", complete: false },
// ];

function App(props) {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
