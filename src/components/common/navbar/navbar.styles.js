import styled from "styled-components";

export const NavigationContainer = styled.div`
  background-color: #0b0819;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1276px;
    margin: 0 auto;
    height: 6.9rem;
  }
  .logo {
    width: 12rem;
  }

  .connect-btn {
    background: linear-gradient(94.37deg, #3387d5 -5.94%, #7a06c9 115.34%);
    border-radius: 30px;
    font-size: 1.6rem;
    border: none;
    color: #fff;
    font-family: inherit;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
  }

  nav {
    a {
      margin-top: 20px;
      text-decoration: none;
      font-size: 1.6rem;
      color: #5a5a5a;

      margin-right: 5rem;

      height: 42px;
      display: inline-block;
    }

    .active {
      border-bottom: 2px solid #627eea;
      color: #627eea;
      font-weight: 600;

      text-align: center;
    }
  }
  .mobile-menu {
    display: none;
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/
  @media (max-width: 59em) {
    background-color: red;
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/
  @media (max-width: 34em) {
    background-color: aqua;
  }
`;
