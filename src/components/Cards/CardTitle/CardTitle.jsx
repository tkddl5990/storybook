import React from "react";
import PropTypes from "prop-types";
import Styled from "./CardTitle.styled";

const CardTitle = ({ children, size, color }) => {
  return (
    <Styled.CardTitle size={size} color={color}>
      {children}
    </Styled.CardTitle>
  );
};

CardTitle.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
};

export default CardTitle;
