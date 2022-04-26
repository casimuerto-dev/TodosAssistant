import React from "react";

export const Warning = (props) => {
  React.useEffect(() => {
    const handleEvent = (e) => {
      if (e.key === "Escape") {
        props.children[1].props.onClick();
      } else if (e.key === "Enter") {
        props.children[2].props.onClick();
      }
    };
    window.addEventListener("keydown", handleEvent);
    return () => window.removeEventListener("keydown", handleEvent);
  });
  return <div className="Warning">{props.children}</div>;
};
