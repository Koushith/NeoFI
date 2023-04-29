import styled from "styled-components";

export const StyledSelcect = styled.div`
  background: #1c1731;
  border-radius: 10px;
  padding: 1.8rem 2.2rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height */

        color: #ffffff;
      }
      img {
        width: 2.2rem;
      }
    }

    .right {
      font-size: 1.4rem;
      color: #6e56f8;
    }
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    color: #c5c5c5;
  }

  p {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 36px;
    color: #627eea;
  }
`;
