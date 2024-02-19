import PropTypes from "prop-types";
// styled
import {
  CheckboxWrapper,
  InputCheckboxStyled,
  LabelCheckboxStyled,
} from "./Checkbox.styled";

export const Checkbox = ({ id, name, checked, labelText }) => {
  return (
    <CheckboxWrapper>
      <InputCheckboxStyled
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
      />
      <LabelCheckboxStyled htmlFor={id}>{labelText}</LabelCheckboxStyled>
    </CheckboxWrapper>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  checked: PropTypes.bool,
};
