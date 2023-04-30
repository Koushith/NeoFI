import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
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

const ModalWrapper = styled.div`
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 500px;
    padding: 1rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const ModalCloseButton = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalContent = styled.div``;

export const Modal = ({ title, onClose, children }) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};
