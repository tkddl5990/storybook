import styled from "styled-components";

const CardTitle = styled.h4.attrs({ className: "card-title" })`
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "0.875rem";
      case "medium":
        return "1rem";
      default:
        return "1.3rem";
    }
  }};
  color: ${({ color }) => color};
`;

CardTitle.defaultProps = {
  size: "large",
  color: "#111",
};

export default { CardTitle };
