import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow, reload, setLoading }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
