import React from "react";
import PropTypes from "prop-types";
import Styled from "./Grid.styled";

const Grid = ({ children, align, justify, col, gap, row, ...rest }) => {
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
    <Styled.Grid
      align={align}
      justify={justify}
      gap={gap}
      col={col}
      row={row}
      $style={styles}
      {...rest}
    >
      {children}
    </Styled.Grid>
  );
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  col: PropTypes.string,
  row: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
};

export default Grid;
