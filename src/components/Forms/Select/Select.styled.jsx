import styled from "styled-components";

const SelectWrapper = styled.div.attrs(({ disabled }) => ({
  className: disabled ? "disabled" : "",
}))`
  appearance: none;
  position: relative;
  padding: 6px 40px 6px 8px;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  background-color: #fff;
  border: 1px solid #e4e7ea;
  border-radius: 0.25rem;

  &.disabled {
    color: #73818f;
    background-color: #e4e7ea;

    & > select {
      background-color: inherit;
      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  &:after {
    position: absolute;
    right: 10px;
    top: 50%;
    color: #999;
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 6px 6px 0;
    content: "";
    transform: translateY(-50%);
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  cursor: pointer;
  appearance: none;
  border: 0;
  outline: none;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #5c6873;
`;

export default { SelectWrapper, Select };
