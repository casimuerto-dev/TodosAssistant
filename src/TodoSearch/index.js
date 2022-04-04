import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

export const TodoSearch = ({ loading }) => {
  const { searchValue, handleSearchChange } = React.useContext(TodoContext);
  return (
    <input
      maxLength={"35"}
      value={searchValue}
      className="searchBar"
      placeholder={!loading ? "¿Qué buscas?" : "Escaneando..."}
      onChange={handleSearchChange}
    ></input>
  );
};
