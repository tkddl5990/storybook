import React from "react";
import PropTypes from "prop-types";
import Flex from "@components/Flex";
import Label from "@components/Forms/Label";
import Styled from "./Radio.styled";

const Radio = ({ id, size, children, disabled, ...rest }) => {
  return (
    <Flex align="center" gap="8">
      <Styled.Radio id={id} disabled={disabled} {...rest} />
      <Label id={id} size={size} color={disabled ? "#e4e7ea" : "#5c6873"}>
        {children}
      </Label>
    </Flex>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Radio;
