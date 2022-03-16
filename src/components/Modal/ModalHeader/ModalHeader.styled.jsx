import styled from "styled-components";

const Header = styled.div.attrs({
  className: "modal-header"
})``;

const CloseButton = styled.button.attrs({
  className: "modal-header_btn_close"
})`
  font-size: 1.5rem;
  border: 0;
  background-color: transparent;
`;

export default { Header, CloseButton };
