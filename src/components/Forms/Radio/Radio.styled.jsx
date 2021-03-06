import styled from "styled-components";

const Radio = styled.input.attrs({
  type: "radio",
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

export default { Radio };
