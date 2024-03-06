import PropTypes from "prop-types";
// style
import {
  InputWrapper,
  LabelStyled,
  InputStyled,
  ButtonShowPass,
  IconOpenEye,
  IconCloseEye,
} from "./Input.styled";
// components
import { Label } from "../Label";
import { ErrorInput } from "../ErrorInput";
import { useState } from "react";

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
  const [inputType, setInputType] = useState(type);

  const handleClick = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <InputWrapper>
      {!moveLabel && (
        <Label htmlFor={name} labelText={labelText} styleLabel={styleLabel} />
      )}

      <InputStyled
        id={name}
        name={name}
        type={inputType}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={String(formik.values[name]).trimStart()}
        style={style}
      />

      {moveLabel && <LabelStyled htmlFor={name}>{labelText}</LabelStyled>}

      {type === "password" && (
        <ButtonShowPass type="button" onClick={handleClick}>
          {inputType === "password" ? <IconOpenEye /> : <IconCloseEye />}
        </ButtonShowPass>
      )}
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
