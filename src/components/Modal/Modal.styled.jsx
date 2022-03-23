import styled, { css } from "styled-components";
import backdrop from "bootstrap/js/src/util/backdrop";

export const ModalBackground = styled.div.attrs({
  className: "modal-background"
})`
  
  ${({ show, backdrop }) => css`
    opacity: ${show ? 1 : 0};
    z-index: ${show ? 1000 : -1};
    background: ${backdrop ? "rgba(0, 0, 0, 0.5)" : "none"};
  `}
  
    transition: all .2s ease-in-out;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const ModalWrapper = styled.div.attrs({
  className: "modal-wrapper"
})`
  display: block;
  position: relative;
  width: auto;
  transition: margin 0.3s ease-in-out;

  ${({ width, show, centered, staticShow }) => {
    const w = width ? width : 500;
    const top_position = centered ? "50%" : "1.75rem";

    return css`
      max-width: ${w}px;
      margin: ${show ? top_position : "0"} calc((100% - ${w}px) / 2);
      transform: ${centered ? "translateY(-100%)" : ""}
        ${staticShow ? "scale(1.01)" : ""};
    `;
  }}
`;
