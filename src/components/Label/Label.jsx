import PropTypes from "prop-types";
//style
import { LabelStyled } from "./Label.styled";

export const Label = ({ htmlFor, labelText, styleLabel }) => {
  return (
    <LabelStyled style={styleLabel} htmlFor={htmlFor}>
      {labelText}
    </LabelStyled>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  styleLabel: PropTypes.object,
};
