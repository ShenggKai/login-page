/* eslint-disable react/prop-types */
import React from "react";

const Text = (props) => {
  const { size = 14, color, fontWeight, onClick } = props;

  const textStyle = {
    fontSize: size,
    color: color || "#212121",
    fontWeight: fontWeight || "500",
  };

  return (
    <span style={textStyle} onClick={onClick}>
      {props.children}
    </span>
  );
};

export default Text;
