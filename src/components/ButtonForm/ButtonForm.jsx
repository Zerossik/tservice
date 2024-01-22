import PropTypes from "prop-types";
// styled
import { ButtonStyled } from "./ButtonForm.styled";

export const ButtonForm = ({
  type = "submit",
  buttonName,
  onClick,
  disabled,
}) => {
  return (
    <ButtonStyled type={type} disabled={disabled} onClick={onClick}>
      {buttonName}
    </ButtonStyled>
  );
};

ButtonForm.propTypes = {
  type: PropTypes.string,
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
