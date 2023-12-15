import { useRouteError } from "react-router-dom";
// styled
import { Wrapper, Container, NavLinkStyled } from "./ErrorPage.styled";
import { PATHS } from "../../constants";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log("ErrorPage: ", error);

  return (
    <Wrapper id="error-page">
      <Container>
        <h1>{error.status}</h1>
        <div>
          {/* <p>{error.statusText}</p> */}
          <p>{error.message}</p>
        </div>
        <NavLinkStyled to={PATHS.BASE}>To main</NavLinkStyled>
      </Container>
    </Wrapper>
  );
};
