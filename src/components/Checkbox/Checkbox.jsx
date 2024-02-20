import PropTypes from "prop-types";
// styled
import {
  InputCheckboxStyled,
  LabelCheckboxStyled,
  FakeCheckox,
  IconBorder,
  IconChecked,
} from "./Checkbox.styled";

export const Checkbox = ({
  id,
  name,
  isChecked,
  labelText,
  disabled,
  onChange,
}) => {
  return (
    <LabelCheckboxStyled>
      <InputCheckboxStyled
        type="checkbox"
        id={id}
        name={name}
        value={isChecked}
        checked={isChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <FakeCheckox>{isChecked ? <IconChecked /> : <IconBorder />}</FakeCheckox>
      {labelText}
    </LabelCheckboxStyled>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
