import React, {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { ModalBackground, ModalWrapper } from "./Modal.styled";
import PropTypes from "prop-types";
import ModalDialog from "./ModalDialog";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";

export const ModalContext = React.createContext(null);

const Modal = ({ children, show, centered, onHide, backdrop }) => {
  const [isChildrenHasDialog, setIsChildrenHasDialog] = useState(false);
  const hideFunc = useCallback(() => {
    if (backdrop === true) {
      onHide();
    }

    if (backdrop === "static") {
      setStaticShow(true);
      setTimeout(() => {
        setStaticShow(false);
      }, 100);
    }
  }, [onHide, backdrop]);

  const [staticShow, setStaticShow] = useState(false);
  const isShow = useMemo(() => show, [show]);
  const onClickWrap = useCallback(e => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (show) {
      const scrollBarWidth =
        window?.innerWidth - document?.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";
    } else {
      document.body.removeAttribute("style");
    }

    return () => {
      document.body.removeAttribute("style");
    };
  }, [show]);

  useEffect(() => {
    if (children) {
      setIsChildrenHasDialog(
        children?.type?.attrs?.some(attr => attr?.className === "modal-dialog")
      );
    }
  }, [children]);

  return (
    <ModalContext.Provider value={{ onHide }}>
      <ModalBackground backdrop={backdrop} show={isShow} onClick={hideFunc}>
        <ModalWrapper
          staticShow={staticShow}
          centered={centered}
          show={isShow}
          onClick={onClickWrap}
        >
          {isChildrenHasDialog ? (
            children
          ) : (
            <ModalDialog>{children}</ModalDialog>
          )}
        </ModalWrapper>
      </ModalBackground>
    </ModalContext.Provider>
  );
};

Modal.Dialog = ModalDialog;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

Modal.propTypes = {
  show: PropTypes.bool,
  centered: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onHide: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

Modal.defaultProps = {
  backdrop: "static"
};

export default Modal;
