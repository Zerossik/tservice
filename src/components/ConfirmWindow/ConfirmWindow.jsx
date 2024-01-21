import PropTypes from "prop-types";
// style
import { BackDrop, Wrapper } from "./ConfirmWindow.styled";
// components

export const ConfirmWindow = ({ options }) => {
  return (
    <BackDrop>
      <Wrapper>{options?.component}</Wrapper>
    </BackDrop>
  );
};

ConfirmWindow.propTypes = {
  options: PropTypes.object,
};
