import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    /* identical to box height */
    margin-bottom: 1.2rem;
    color: #c5c5c5;
  }
  input[type="text"]::after {
    content: "\f002"; /* Unicode for the search icon */
    font-family: inherit; /* Use the FontAwesome font */
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const InputElem = styled.input`
  border: 1px solid rgba(110, 86, 248, 0.25);
  border-radius: 1rem;
  color: #6f6f7e;
  background-color: ${(props) => (props.disabled ? "#1C1731" : "transparent")};
  font-weight: 600;
  font-size: 1.6rem;
  padding: 1.4rem 2.2rem;
`;
