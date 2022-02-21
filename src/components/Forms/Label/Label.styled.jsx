import styled from "styled-components";

const Label = styled.label`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;

Label.defaultProps = {
  wdight: 500,
  align: "inherit",
  size: ".875rem",
  color: "#111",
};

export default { Label };
