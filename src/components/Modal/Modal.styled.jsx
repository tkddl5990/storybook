import styled, { css } from "styled-components";

export const ModalBackground = styled.div.attrs({
  className: "modal-background"
})`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div.attrs({
  className: "modal-wrapper"
})`
  display: block;
  position: relative;
  width: auto;
  pointer-events: none;

  ${({ width }) => {
    const w = width ? width : 500;

    return css`
      max-width: ${w}px;
      margin: 1.75rem calc((100% - ${w}px) / 2);
    `;
  }}
`;

export const ModalBody = styled.div.attrs({
  className: "modal-body"
})`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  //height: fit-content;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  //bottom: 0;
  //right: 0;
`;

export const ModalDefault = styled.div.attrs({
  className: "modal-default"
})``;
