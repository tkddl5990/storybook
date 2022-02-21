import React from "react";
import PropTypes from "prop-types";
import Styled from "./Flex.styled";

const Flex = ({ children, align, justify, direction, gap, ...rest }) => {
  return (
    <Styled.Flex
      align={align}
      justify={justify}
      direction={direction}
      gap={gap}
      {...rest}
    >
      {children}
    </Styled.Flex>
  );
};

Flex.propTypes = {
  align: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  justify: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "space-around",
    "space-between",
  ]),
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Flex;
