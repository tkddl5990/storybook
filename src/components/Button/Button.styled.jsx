import styled, { css } from "styled-components";

const Button = styled.button`
  display: inline-block;
  text-align: center;
  ${({ size }) => {
    switch (size) {
      case "medium":
        return css`
          padding: 0.75rem 0.875rem;
          font-size: 1rem;
        `;
      case "large":
        return css`
          padding: 0.875rem 1rem;
          font-size: 1.375rem;
        `;
      default:
        return css`
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        `;
    }
  }}

  line-height: 1.5;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid transparent;
  background: transparent;
  width: fit-content;
  transition: all 0.4s;
  ${(props) =>
    props.$style &&
    css`
      ${({ $style }) => ({ ...$style })}
    `}

  &:disabled {
    opacity: 0.65;
  }

  &.primary {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8;

    &:hover {
      background-color: #1b8eb7;
      border-color: #1985ac;
    }

    &.outline {
      color: #20a8d8;
      background-color: #fff;

      &:hover {
        color: #fff;
        background-color: #20a8d8;
        border-color: #20a8d8;
      }
    }
  }

  &.success {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74;

    &:hover {
      background-color: #3ea662;
      border-color: #3a9d5d;
    }

    &.outline {
      color: #4dbd74;
      background-color: #fff;

      &:hover {
        color: #fff;
        background-color: #4dbd74;
        border-color: #4dbd74;
      }
    }
  }

  &.warning {
    color: #111;
    background-color: #ffc107;
    border-color: #ffc107;

    &:hover {
      background-color: #e0a800;
      border-color: #d39e00;
    }

    &.outline {
      color: #ffc107;
      background-color: #fff;

      &:hover {
        color: #111;
        background-color: #ffc107;
        border-color: #ffc107;
      }
    }
  }

  &.dark {
    color: #fff;
    background-color: #2f353a;
    border-color: #2f353a;

    &:hover {
      background-color: #1e2225;
      border-color: #181b1e;
    }

    &.outline {
      color: #2f353a;
      background-color: #fff;

      &:hover {
        color: #fff;
        background-color: #2f353a;
        border-color: #2f353a;
      }
    }
  }

  &.danger {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b;

    &:hover {
      background-color: #f64846;
      border-color: #f63c3a;
    }

    &.outline {
      color: #f86c6b;
      background-color: #fff;

      &:hover {
        color: #fff;
        background-color: #f86c6b;
        border-color: #f86c6b;
      }
    }
  }
`;

Button.defaultProps = {
  size: "small",
};

export default { Button };
