import styled from "styled-components";

const Card = styled.div.attrs({ className: "card-body" })`
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #c8ced3;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  position: relative;
`;

export default {
  Card
};
