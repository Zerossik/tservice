// import { useRouteError } from "react-router-dom";
// styled
import {
  Wrapper,
  ImgWrapper,
  ImgStyle,
  NavLinkStyled,
} from "./ErrorPage.styled";
// components
import { PATHS } from "../../constants";

export const ErrorPage = () => {
  //если нужно вывести куда-то информацию об ошибке
  // const error = useRouteError();
  // console.log("ErrorPage: ", error);

  return (
    <Wrapper id="error-page">
      <ImgWrapper>
        <ImgStyle src="/images/404.svg" />
        <NavLinkStyled to={PATHS.BASE}>На головну</NavLinkStyled>
      </ImgWrapper>
    </Wrapper>
  );
};
