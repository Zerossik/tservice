import PropTypes from "prop-types";
// style
import { InputWrapper, LabelStyled, InputStyled } from "./Input.styled";
// components
import { Label } from "../Label";
import { ErrorInput } from "../ErrorInput";

export const Input = ({
  name,
  type,
  formik,
  labelText,
  moveLabel,
  styleLabel,
  style = {},
  placeholder = "",
}) => {
  return (
    <InputWrapper>
      {!moveLabel && (
        <Label htmlFor={name} labelText={labelText} styleLabel={styleLabel} />
      )}
      <InputStyled
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values[name]}
        style={style}
      />
      {moveLabel && <LabelStyled htmlFor={name}>{labelText}</LabelStyled>}
      {formik.errors[name] ? <ErrorInput text={formik.errors[name]} /> : null}
    </InputWrapper>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  labelText: PropTypes.string,
  moveLabel: PropTypes.bool,
  styleLabel: PropTypes.object,
  style: PropTypes.object,
  placeholder: PropTypes.string,
};
