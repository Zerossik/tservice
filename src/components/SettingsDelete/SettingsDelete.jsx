import PropTypes from "prop-types";
// style
import { Wrapper, Title, Text, ButtonWrapper } from "./SettingsDelete.styled";
// components
import { ButtonForm } from "../ButtonForm";

export const SettingsDelete = ({
  title,
  value,
  buttonName,
  closeConfirm,
  okConfirm,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Text>{value}</Text>

      <ButtonWrapper>
        <ButtonForm
          type="button"
          onClick={closeConfirm}
          buttonName="Скасувати"
        />
        <ButtonForm type="button" onClick={okConfirm} buttonName={buttonName} />
      </ButtonWrapper>
    </Wrapper>
  );
};

SettingsDelete.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  buttonName: PropTypes.string,
  closeConfirm: PropTypes.func,
  okConfirm: PropTypes.func,
};
