import React from "react";
import Styled from "./ModalTitle.styled";
import PropTypes from "prop-types";

const ModalTitle = ({ children, as }) => <Styled.Title as={as}>{children}</Styled.Title>;

ModalTitle.defaultProps = {
    as: 'h4',
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
}

export default ModalTitle;
