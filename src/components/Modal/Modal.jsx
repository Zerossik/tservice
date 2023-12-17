import { createPortal } from "react-dom";
import PropTypes from "prop-types";
// style
import { BackDrop, ModalWindow, ButtonClose, IconClose } from "./Modal.styled";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onToggleModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onToggleModal();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onToggleModal]);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  return createPortal(
    <BackDrop onClick={handleBackDropClick}>
      <ModalWindow>
        <ButtonClose onClick={onToggleModal}>
          <IconClose />
        </ButtonClose>
        {children}
      </ModalWindow>
    </BackDrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
