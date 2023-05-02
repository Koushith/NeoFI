import React from "react";

import {
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalWrapper,
} from "./modal.styles";

export const Modal = ({ title, onClose, children }) => {
  console.log("render rom modal component.....................");
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
