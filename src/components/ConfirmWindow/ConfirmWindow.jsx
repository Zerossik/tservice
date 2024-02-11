import { useEffect } from "react";
import PropTypes from "prop-types";
// style
import { BackDrop, Wrapper } from "./ConfirmWindow.styled";
// components

export const ConfirmWindow = ({ close, options }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        close();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return (
    <BackDrop onClick={handleBackDropClick}>
      <Wrapper>{options?.component}</Wrapper>
    </BackDrop>
  );
};

ConfirmWindow.propTypes = {
  options: PropTypes.object,
  close: PropTypes.func,
};
