import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  max-width: 41rem;

  background: #181627;
  border-radius: 18px;
  padding: 2rem;
  border-radius: 1.8rem;
  border: 1px solid;

  border-image-source: linear-gradient(
    180deg,
    #3b79d4 -12.45%,
    rgba(0, 0, 0, 0) 38.78%
  );

  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 500px;
    padding: 1rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

export const ModalCloseButton = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  background: rgba(110, 86, 248, 0.15);
  border-radius: 5px;
  border: none;
  width: 2.4rem;
  color: #fff;
`;

export const ModalContent = styled.div`
  padding: 0 4.5rem 4.5rem 4.5rem;
`;
