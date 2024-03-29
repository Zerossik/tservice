// import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
// style
import {
  BackDrop,
  ModalWindow,
  ModalHeader,
  ModalTitle,
  ButtonClose,
  ModalBody,
  IconClose,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onToggleModal, title, children, styleModal }) => {
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.code === "Escape") {
  //       onToggleModal();
  //     }
  //   };

  //   document.body.style.overflow = "hidden";
  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.body.style.overflow = "visible";
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [onToggleModal]);

  // const handleBackDropClick = (e) => {
  //   if (e.currentTarget === e.target) {
  //     onToggleModal();
  //   }
  // };

  return createPortal(
    <BackDrop>
      <ModalWindow style={styleModal}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ButtonClose onClick={onToggleModal}>
            <IconClose />
          </ButtonClose>
        </ModalHeader>

        <ModalBody>{children}</ModalBody>
      </ModalWindow>
    </BackDrop>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  styleModal: PropTypes.object,
};
