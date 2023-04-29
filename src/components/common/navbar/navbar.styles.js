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
  }

  nav {
    align-self: flex-end;
    ul {
      list-style: none;
      display: flex;
      gap: 5rem;
    }

    a {
      margin-top: 20px;
      text-decoration: none;
      font-size: 1.6rem;
      color: #5a5a5a;
      margin-bottom: 1.8rem;
      align-self: flex-end;
    }
    .active {
      border-bottom: 2px solid #627eea;
      color: #627eea;
      font-weight: 600;
    }
  }
`;
