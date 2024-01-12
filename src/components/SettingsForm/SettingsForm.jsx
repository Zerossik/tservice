import PropTypes from "prop-types";
// style
import {
  FormStyled,
  FieldsetStyled,
  LegendStyled,
} from "./SettingsForm.styled";
// components

export const SettingsForm = ({ formik, legendTitle, children }) => {
  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <FieldsetStyled>
        <LegendStyled>{legendTitle}</LegendStyled>
        {children}
      </FieldsetStyled>
    </FormStyled>
  );
};

SettingsForm.propTypes = {
  formik: PropTypes.object.isRequired,
  legendTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
