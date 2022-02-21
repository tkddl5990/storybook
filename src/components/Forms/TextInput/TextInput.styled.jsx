import styled from "styled-components";

const TextInput = styled.input.attrs(({ error }) => ({
  type: "text",
  className: error ? "error" : "",
}))`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  background-color: #fff;
  border: 1px solid #e4e7ea;
  outline: none;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #5c6873;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(32 168 216 / 25%);
    color: #5c6873;
    background-color: #fff;
    border-color: #8ad4ee;
    outline: 0;
  }

  &:disabled {
    color: #73818f;
    background-color: #e4e7ea;
  }

  &.error {
    border-color: #ff2d55;
    box-shadow: 0 0 0 0.2rem rgb(255 45 85 / 25%);
  }
`;

export default {
  TextInput,
};
