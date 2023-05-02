import styled from "styled-components";

export const SearchCoinsContainer = styled.div`
  .result-list {
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    max-height: 100%;
    overflow-y: auto;
    height: 300px;
    /* Hide the default scrollbar */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Add styling to the scrollbar thumb */
    &::-webkit-scrollbar-thumb {
      display: none;
    }

    /* Add styling to the scrollbar track */
    &::-webkit-scrollbar-track {
      display: none;
    }
  }
`;

export const CoinContainer = styled.div`
  /* background: #1b192d; */
  background: ${(props) => (props.isSelected ? "" : "#1b192d")};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.6rem;
  cursor: pointer;

  &:hover {
    background: #1b192d;
  }

  &:active {
    background: #1b192d;
  }
  .left {
    display: flex;
    gap: 1.4rem;
    align-items: center;

    p {
      font-size: 1.4rem;
      font-weight: 400;
      color: #fff;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #d2d2d2;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 7px 14px 7px 40px; /* Adjust the padding to make space for the search icon */
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  color: #d2d2d2;
  border: 1px solid rgba(110, 86, 248, 0.25);
  border-radius: 30px;
  &:focus {
    outline: none;
    border: 1px solid rgba(110, 86, 248, 0.25);
  }
`;
