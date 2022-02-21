import styled, { css } from "styled-components";

const Grid = styled.div`
  display: grid;
  ${(props) =>
    props.$style &&
    css`
      ${({ $style }) => ({ ...$style })}
    `}
  ${(props) =>
    props.align &&
    css`
      align-items: ${({ align }) => align};
    `}
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${({ justify }) => justify};
    `}
  ${() =>
    css`
      grid-template-columns: ${({ col }) => col};
      grid-template-rows: ${({ row }) => row};
    `}
  ${(props) =>
    props.gap &&
    css`
      grid-gap: ${({ gap }) => (isNaN(gap) ? gap : gap + "px")};
    `}
`;

Grid.defaultProps = {
  col: "auto",
  row: "auto",
};

export default { Grid };
