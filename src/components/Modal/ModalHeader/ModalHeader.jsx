import React, {useCallback, useContext} from "react";
import Styled from "./ModalHeader.styled";
import PropTypes from "prop-types";
import {ModalContext} from "../Modal";

const ModalHeader = ({children, hasCloseButton}) => {
    const context = useContext(ModalContext);
    const onHideHandler = useCallback(context.onHide, []);

    return (
        <Styled.Header>
            {children}
            {hasCloseButton && <Styled.CloseButton onClick={onHideHandler}>&times;</Styled.CloseButton>}
        </Styled.Header>
    )
};

ModalHeader.propTypes = {
    hasCloseButton: PropTypes.bool,
    onHide: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
}

export default ModalHeader;
