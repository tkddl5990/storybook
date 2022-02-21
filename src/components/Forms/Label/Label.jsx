import React from "react";
import PropTypes from "prop-types";
import Styled from "./Label.styled";

const Label = ({ children, ...rest }) => {
  const { id, required, size, weight, align, color } = rest;
  return (
    <Styled.Label
      htmlFor={id}
      color={color}
      size={size}
      weight={weight}
      align={align}
    >
      {required && "*"}
      {children}
    </Styled.Label>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Label;
