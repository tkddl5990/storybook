import React from "react";
import Styled from "./ModalDialog.styled";
import PropTypes from "prop-types";

const ModalDialog = ({children}) => {
    return (
        <Styled.Dialog>{children}</Styled.Dialog>
    )
}

ModalDialog.propTypes = {
    onHide: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
}

export default ModalDialog;
