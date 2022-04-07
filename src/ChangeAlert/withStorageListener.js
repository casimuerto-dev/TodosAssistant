import React from "react";

export function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("cambios en TODOS_V1!");
        setStorageChange(true);
      }
    });
    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={setStorageChange}
        reload={props.reload}
        setLoading={props.setLoading}
      />
    );
  };
}
