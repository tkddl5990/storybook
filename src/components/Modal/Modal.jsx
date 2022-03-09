import React, {cloneElement, useCallback, useEffect, useMemo, useState} from "react";
import {
    ModalBackground,
    ModalWrapper
} from "./Modal.styled";
import PropTypes  from "prop-types";
import ModalDialog from "./ModalDialog";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";

const Modal = ({children, show, onHide}) => {
    const [isChildrenHasDialog, setIsChildrenHasDialog] = useState(false);
    const hideFunc = useCallback(onHide, []);
    const isShow = useMemo(() => show, [show]);
    const onClickWrap = useCallback((e) => {
        e.stopPropagation()
    }, [])

    useEffect(() => {
        if (show) {
            const scrollBarWidth = window?.innerWidth - document?.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = scrollBarWidth + 'px';
        } else {
            document.body.removeAttribute('style');
        }

        return () => {
            document.body.removeAttribute('style');
        }
    }, [show])

    useEffect(() => {
        if (children) {
            setIsChildrenHasDialog(children?.type?.attrs?.some(attr => attr?.className === "modal-dialog"))
        }
    }, [children])

    return (
        <ModalBackground show={isShow} onClick={hideFunc}>
            <ModalWrapper show={isShow} onClick={onClickWrap}>
                {isChildrenHasDialog ? children : <ModalDialog>{children}</ModalDialog>}
            </ModalWrapper>
        </ModalBackground>
    );
};

Modal.Dialog = ModalDialog;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

Modal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
};

export default Modal;
