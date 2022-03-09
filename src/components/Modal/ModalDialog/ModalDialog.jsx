import React, {cloneElement, useMemo} from "react";
import Styled from "./ModalDialog.styled";
import PropTypes from "prop-types";

const ModalDialog = ({children, onHide}) => {
    const copiedChildren = useMemo(() => {
            if (Array.isArray(children)) {
                return children.map((child, index) => cloneElement(child, {key: `children-${index}`}))
            }

            if (typeof children === 'object') {
                return cloneElement(children)
            }

            return children
        }, [children])

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
