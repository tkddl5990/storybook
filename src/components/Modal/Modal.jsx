import React from "react";
import {
  ModalBackground,
  ModalBody,
  ModalDefault,
  ModalWrapper
} from "./Modal.styled";
import PropTypes from "prop-types";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import Button from "../Button";

const Modal = ({ title, children, buttons }) => {
  return (
    <ModalBackground>
      <ModalWrapper>
        <ModalBody>
          <ModalHeader>
            <h1>{title}</h1>
            <Button>X</Button>
          </ModalHeader>
          <ModalDefault>{children}</ModalDefault>
          <ModalFooter>
            {buttons
              ? buttons
              : [
                  <Button key={"modal-footer-btn-cancel"}>취소</Button>,
                  <Button key={"modal-footer-btn-confirm"}>확인</Button>
                ]}
          </ModalFooter>
        </ModalBody>
      </ModalWrapper>
    </ModalBackground>
  );
};

Modal.propTypes = {
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};

export default Modal;
