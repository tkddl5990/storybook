import React from "react";
import Styled  from "./ModalFooter.styled";
import PropTypes from "prop-types";

const ModalFooter = ({children}) => <Styled.Footer>{children}</Styled.Footer>;

ModalFooter.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
}

export default ModalFooter;