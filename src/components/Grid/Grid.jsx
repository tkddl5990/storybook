import React from "react";
import PropTypes from "prop-types";
import Styled from "./Grid.styled";

const Grid = ({ children, col, gap, row, ...rest }) => {
  return (
    <Styled.Grid gap={gap} col={col} row={row} {...rest}>
      {children}
    </Styled.Grid>
  );
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Grid;
