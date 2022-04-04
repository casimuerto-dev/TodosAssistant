import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modalBackground">{props.children}</div>,
    document.getElementById("modal")
  );
}
