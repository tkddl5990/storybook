import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  ${(props) =>
    props.gap &&
    css`
      gap: ${({ gap }) => (isNaN(gap) ? gap : gap + "px")};
    `}
`;

Flex.defaultProps = {
  align: "flex-start",
  justify: "flex-start",
  direction: "row",
};

export default { Flex };
