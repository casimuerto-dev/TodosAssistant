import React from "react";
import { useStorageListener } from "./useStorageListener";

export function ChangeAlert({ reload, setLoading }) {
  const { show, toggleShow } = useStorageListener();

  if (show) {
    return (
      <>
        <p>Hubo cambios!</p>
        <button
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
