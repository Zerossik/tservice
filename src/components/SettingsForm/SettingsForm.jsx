import PropTypes from "prop-types";
// style
import { FormStyled, Title, ButtonWrapper } from "./SettingsForm.styled";
// components
import { ButtonForm } from "../ButtonForm";

export const SettingsForm = ({
  formik,
  title,
  children,
  buttonName,
  isLoading,
  closeConfirm,
}) => {
  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Title>{title}</Title>

      {children}

      <ButtonWrapper>
        <ButtonForm
          type="button"
          onClick={closeConfirm}
          buttonName="Скасувати"
        />
        <ButtonForm
          buttonName={buttonName}
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </ButtonWrapper>
    </FormStyled>
  );
};

SettingsForm.propTypes = {
  formik: PropTypes.object.isRequired,
  title: PropTypes.string,
  buttonName: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeConfirm: PropTypes.func,
  isLoading: PropTypes.bool,
};
