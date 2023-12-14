import PropTypes from "prop-types";
// style
import { BackDrop, ModalWindow, ButtonClose, IconClose } from "./Modal.styled";
import { useEffect } from "react";

export const Modal = ({ onToggleModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onToggleModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onToggleModal]);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  return (
    <BackDrop onClick={handleBackDropClick}>
      <ModalWindow>
        <ButtonClose onClick={onToggleModal}>
          <IconClose />
        </ButtonClose>
        {children}
      </ModalWindow>
    </BackDrop>
  );
};

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
