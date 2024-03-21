// style
import { Wrapper, Text, NavLinkStyled } from "./VerifiedEmail.styled";
//components
import { Logo } from "../Logo";
import { PATHS } from "../../constants";

export const VerifiedEmail = () => {
  return (
    <Wrapper>
      <Logo />
      <Text>Вітаємо, ваш емейл успішно підтверджено</Text>
      <NavLinkStyled to={`/${PATHS.LOGIN}`}>Увійти</NavLinkStyled>
    </Wrapper>
  );
};
