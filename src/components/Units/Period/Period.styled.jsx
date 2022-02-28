import styled from "styled-components";

const PeriodButton = styled.button`
  position: relative;
  padding: 6px 20px;
  width: fit-content;
  height: calc(1.5em + 0.75rem + 2px);
  background-color: #fff;
  border: 1px solid #e4e7ea;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: #5c6873;

  &:hover,
  &.active {
    border-color: #2a87d0;
    color: #2a87d0;
  }

  &:active {
    background-color: #2a87d0;
    border-color: #2a87d0;
    color: #fff;
  }
`;

export default { PeriodButton };
