import React from "react";
import "./TodoSearch.css";

export const TodoSearch = ({ loading, searchValue, handleSearchChange }) => {
  const handleFocus = () => {
    document.querySelector(".searchBar").setAttribute("placeholder", "");
  };
  const handleBlur = () => {
    document
      .querySelector(".searchBar")
      .setAttribute("placeholder", "¿Qué buscas?");
    handleSearchChange({ target: { value: "" } });
  };

  return (
    <input
      onBlur={handleBlur}
      onFocus={handleFocus}
      maxLength={"35"}
      value={searchValue}
      className="searchBar"
      placeholder={!loading ? "¿Qué buscas?" : "Escaneando..."}
      onChange={handleSearchChange}
      disabled={loading}
    ></input>
  );
};
