import React from "react";
import PropTypes from "prop-types";
import Styled from "./Card.styled";

const Card = ({ children }) => {
  return <Styled.Card>{children}</Styled.Card>;
};

Card.defaultProps = {
  children: null,
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Card;
