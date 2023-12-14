import { useEffect } from "react";
import PropTypes from "prop-types";
// style
import { BackDrop, WrapperContent } from "./DropDown.styled";

export const DropDown = ({ onToggleDropDown, children, styled, dropRef }) => {
  useEffect(() => {
    const handleClickAway = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        onToggleDropDown();
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, [dropRef, onToggleDropDown]);

  return (
    <>
      <BackDrop></BackDrop>
      <WrapperContent style={styled}>{children}</WrapperContent>
    </>
  );
};

DropDown.propTypes = {
  onToggleDropDown: PropTypes.func,
  children: PropTypes.node,
  styled: PropTypes.object,
  dropRef: PropTypes.object,
};
