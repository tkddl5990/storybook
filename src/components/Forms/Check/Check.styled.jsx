import styled from "styled-components";

const Check = styled.input.attrs({
  type: "checkbox",
  className: "form-check-input",
})`
  margin-top: 0px;

  &.form-check-input:checked {
    background-color: #20a8d8;
    border-color: #20a8d8;
  }

  &:disabled {
    background: #e4e7ea;
  }
`;

export default { Check };
