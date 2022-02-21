import React from "react";
import PropTypes from "prop-types";
import Styled from "./Flex.styled";

const Flex = ({ children, align, justify, direction, gap, ...rest }) => {
  const margin = Object.keys(rest).filter((it) => it.match(/^m/gi));
  const padding = Object.keys(rest).filter((it) => it.match(/^p/gi));
  const styles = {};

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

  if (padding.length) {
    for (const pd of padding) {
      const [[, direction], value] = pd.split("-");
      switch (direction) {
        case "t":
          styles["padding-top"] = `${value}px`;
          break;
        case "l":
          styles["padding-left"] = `${value}px`;
          break;
        case "r":
          styles["padding-right"] = `${value}px`;
          break;
        case "b":
          styles["padding-bottom"] = `${value}px`;
          break;
        default:
          break;
      }
    }
  }

  return (
    <Styled.Flex
      align={align}
      justify={justify}
      direction={direction}
      gap={gap}
      $style={styles}
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
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Flex;
