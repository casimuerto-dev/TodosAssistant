import React from "react";
import { useStorageListener } from "./useStorageListener";

export function ChangeAlert({ reload, setLoading }) {
  const { show, toggleShow } = useStorageListener();

  if (show) {
    return (
      <>
        <p style={{ color: "white", fontFamily: "cursive" }}>Hubo cambios!</p>
        <button
          className="listItem"
          onClick={() => {
            toggleShow(false);
            reload((prev) => !prev);
            setLoading(true);
          }}
        >
          Actualizar
        </button>
      </>
    );
  } else {
    return null;
  }
}
