import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 470px;
  margin: 17.6rem auto;
  background: #0b0819;
  border-radius: 1.8rem;
  border: 1px solid rgba(110, 86, 248, 0.25);

  .token-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-40px);

    img {
      width: 70px;
      background: #1c1731;
      padding: 10px;
      border-radius: 50%;
      border: 6px solid #040406;
    }
  }
  .inner {
    padding: 0 4rem 4rem 4rem;
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/
  @media (max-width: 34em) {
    margin: 5rem 1rem;
    .inner {
      padding: 0 2rem 2rem 2rem;
    }
  }
`;

export const Spacer = styled.div`
  margin-bottom: 2.4rem;
`;
