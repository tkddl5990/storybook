import React from "react";
import Styled from "./ModalBody.styled";
import PropTypes from "prop-types";

const ModalBody = ({children}) => <Styled.Body>{children}</Styled.Body>;


ModalBody.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
}
export default ModalBody;
