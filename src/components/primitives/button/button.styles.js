import styled from "styled-components";

export const StyledButton = styled.button`
  background: linear-gradient(94.37deg, #3387d5 -5.94%, #7a06c9 115.34%);
  border-radius: 30px;
  font-size: 1.6rem;
  border: none;
  color: #fff;
  font-family: inherit;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  //todo- refactor when you add more variants
  width: ${(props) => (props.variant === "small" ? " " : "100%")};
`;
