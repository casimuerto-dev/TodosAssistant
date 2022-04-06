import React from "react";
export const MockContainer = (props) => {
  return React.Children.toArray(props.children).map((item) =>
    React.cloneElement(item, { mockText: "noice" })
  );
};
