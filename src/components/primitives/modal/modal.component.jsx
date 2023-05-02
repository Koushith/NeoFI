import React from "react";
import {
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalWrapper,
} from "./modal.styles";

export const Modal = ({ title, onClose, children }) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalHeader>
          {/* <ModalTitle>{title}</ModalTitle> */}
          <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};
