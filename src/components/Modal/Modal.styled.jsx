import styled, { css } from "styled-components";

export const ModalBackground = styled.div.attrs({
  className: "modal-background"
})`
  
  ${({show}) => css`
    opacity: ${show ? 1 : 0};
    z-index: ${show ? 1000 : -1};
  `}
  
    transition: all .2s ease-in-out;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const ModalWrapper = styled.div.attrs({
  className: "modal-wrapper"
})`
  display: block;
  position: relative;
  width: auto;
  transition: all .3s ease-in-out;

  ${({ width, show }) => {
    const w = width ? width : 500;

    return css`
      max-width: ${w}px;
      margin: ${show ? '1.75rem' : '0' } calc((100% - ${w}px) / 2);
    `;
  }}
`;



