// style
import {
  Wrapper,
  LogoWrapper,
  TextWrapper,
  Text,
  ButtonWrapper,
  ButtonStyled,
  NavLinkStyled,
} from "./VerifyUser.styled";
//components
import { Logo } from "../Logo";
import { PATHS } from "../../constants";
import { useConfirm } from "../ConfirmService/context";
import { SendEmailForm } from "../SendEmailForm/SendEmailForm";

export const VerifyUser = () => {
  const confirm = useConfirm();

  const handleClickSend = () => {
    confirm.openConfirm({
      component: <SendEmailForm closeConfirm={confirm.handleClose} />,
    });
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <TextWrapper>
        <Text>Вітаємо, ваш профіль був успішно створений.</Text>
        <Text>Перейдіть на пошту та підтвердіть свій емейл.</Text>
      </TextWrapper>

      <ButtonWrapper>
        <ButtonStyled type="button" onClick={handleClickSend}>
          Надіслати листа ще раз
        </ButtonStyled>
        <NavLinkStyled to={PATHS.BASE}>На головну</NavLinkStyled>
      </ButtonWrapper>
    </Wrapper>
  );
};
