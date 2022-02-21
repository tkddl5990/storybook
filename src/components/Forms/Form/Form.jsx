import React from "react";
import PropTypes from "prop-types";
import Styled from "./Form.styled";

const Form = ({ children, ...rest }) => {
  return (
    <Styled.FormContainer {...rest}>
      {children}
      <input type="submit" />
    </Styled.FormContainer>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  width: PropTypes.string,
};

export default Form;
