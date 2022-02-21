import styled from "styled-components";

const FormContainer = styled.form`
  width: ${({ width }) => width};
  position: relative;

  > input[type="submit"] {
    display: none;
  }
`;

FormContainer.defaultProps = {
  width: "100%",
};

export default {
  FormContainer,
};
