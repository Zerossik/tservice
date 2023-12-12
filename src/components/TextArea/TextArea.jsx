import PropTypes from "prop-types";
// style
import { Wrapper, TextAreaStyled } from "./TextArea.styled";
// components
import { Label } from "../Label";

export const TextArea = ({ name, formik, labelText }) => {
  return (
    <Wrapper>
      <Label htmlFor={name} labelText={labelText} />
      <TextAreaStyled
        id={name}
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        autoComplete="off"
      ></TextAreaStyled>
    </Wrapper>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  formik: PropTypes.object,
  labelText: PropTypes.string,
};
