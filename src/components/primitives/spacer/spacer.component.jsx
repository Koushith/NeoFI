import styled from "styled-components";

export const Spacer = styled.div`
  margin-bottom: ${(props) => (props.space ? props.space : "2.4rem")};
`;
