import { useEffect } from "react";
import PropTypes from "prop-types";
// style
import { WrapperContent } from "./DropDown.styled";

export const DropDown = ({
  onToggleDropDown,
  children,
  styled,
  dropRef,
  buttonRef,
}) => {
  useEffect(() => {
    const handleClickAway = (e) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        onToggleDropDown();
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, [buttonRef, dropRef, onToggleDropDown]);

  return <WrapperContent style={styled}>{children}</WrapperContent>;
};

DropDown.propTypes = {
  onToggleDropDown: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  styled: PropTypes.object,
  dropRef: PropTypes.object.isRequired,
  buttonRef: PropTypes.object.isRequired,
};
