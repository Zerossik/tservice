import PropTypes from "prop-types";
//style
import { LabelStyled } from "./Label.styled";

export const Label = ({ htmlFor, labelText }) => {
  return <LabelStyled htmlFor={htmlFor}>{labelText}</LabelStyled>;
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  labelText: PropTypes.string,
};
