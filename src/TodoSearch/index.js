import React from "react";
import "./TodoSearch.css";

export const TodoSearch = ({ loading, searchValue, handleSearchChange }) => {
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
