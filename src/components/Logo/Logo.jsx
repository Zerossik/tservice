import { useNavigate } from "react-router-dom";
// style
import { NavLinkStyled } from "./Logo.styled";
// componets
import { PATHS } from "../../constants";

export const Logo = () => {
  // const navigate = useNavigate();

  return (
    // <Wrapper>
    <NavLinkStyled to={`/${PATHS.SERVICES}`}>TService</NavLinkStyled>
  );
};
