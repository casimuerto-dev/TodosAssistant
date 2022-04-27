import React from "react";
import "./warningStyles.css";

export const Warning = (props) => {
  React.useEffect(() => {
    const handleEvent = (e) => {
      if (e.key === "Escape") {
        props.children[1].props.children[0].props.onClick();
      } else if (e.key === "Enter") {
        props.children[1].props.children[1].props.onClick();
      }
    };
    window.addEventListener("keydown", handleEvent);
    return () => window.removeEventListener("keydown", handleEvent);
  });
  return <div className="warning">{props.children}</div>;
};
