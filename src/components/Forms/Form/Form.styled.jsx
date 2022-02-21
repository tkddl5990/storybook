import styled from "styled-components";

const FormContainer = styled.form`
  border: 1px solid red;
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
