import styled from "styled-components";

export const Dialog = styled.div.attrs({
  className: "modal-dialog"
})`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  pointer-events: auto;
  margin: 0;
`;


export default { Dialog };
