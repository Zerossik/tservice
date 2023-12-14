import PropTypes from "prop-types";
// styled
import { ButtonStyled } from "./ButtonForm.styled";

export const ButtonForm = ({ buttonName, disabled }) => {
  return (
    <ButtonStyled type="submit" disabled={disabled}>
      {buttonName}
    </ButtonStyled>
  );
};

ButtonForm.propTypes = {
  buttonName: PropTypes.string,
  disabled: PropTypes.bool,
};
