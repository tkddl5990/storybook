import React from "react";
import PropTypes from "prop-types";
import Styled from "./Button.styled";

const Button = ({ outline, size, disabled, children, ...rest }) => {
  const { success, warning, dark, danger, primary = true } = rest;
  const margin = Object.keys(rest).filter((it) => it.match(/^m/gi));
  const [[variant]] = Object.entries({
    success,
    warning,
    dark,
    danger,
    primary,
  }).filter(([_, value]) => value) || [["primary"]];
  const styles = {};
  let classname = `${variant}`;

  if (outline) classname = classname + " outline";

  if (margin.length) {
    for (const mg of margin) {
      const [[, direction], value] = mg.split("-");
      switch (direction) {
        case "t":
          styles["margin-top"] = `${value}px`;
          break;
        case "l":
          styles["margin-left"] = `${value}px`;
          break;
        case "r":
          styles["margin-right"] = `${value}px`;
          break;
        case "b":
          styles["margin-bottom"] = `${value}px`;
          break;
        default:
          break;
      }
    }
  }

  return (
    <Styled.Button
      className={classname}
      disabled={disabled}
      size={size}
      $styles={styles}
      {...rest}
    >
      {children}
    </Styled.Button>
  );
};

Button.propTypes = {
  outline: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
