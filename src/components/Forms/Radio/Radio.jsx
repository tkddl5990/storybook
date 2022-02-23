import React from "react";
import PropTypes from "prop-types";
import Flex from "@components/Flex";
import Label from "@components/Forms/Label";
import Styled from "./Radio.styled";

const Radio = ({ id, name, size, children, disabled, ...rest }) => {
  return (
    <Flex align="center" gap="8">
      <Styled.Radio type="radio" id={id} name={name} {...rest} />
      <Label id={id} size={size} color={disabled ? "#e4e7ea" : "#5c6873"}>
        {children}
      </Label>
    </Flex>
  );
};

Radio.defaultProps = {
  size: "0.875rem",
};

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Radio;
