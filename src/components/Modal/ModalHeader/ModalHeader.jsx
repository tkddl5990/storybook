import React, {useCallback} from "react";
import Styled from "./ModalHeader.styled";
import PropTypes from "prop-types";

const ModalHeader = ({children, hasCloseButton, onHide}) => {

    const onHideHandler = useCallback(onHide, []);

    return (
        <Styled.Header>
            {children}
            {hasCloseButton && <button onClick={onHideHandler}>X</button>}
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
