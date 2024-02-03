// style
import { NavLinkStyled } from "./Logo.styled";
// componets
import { PATHS } from "../../constants";

export const Logo = () => {
  return <NavLinkStyled to={`/${PATHS.SERVICES}`}>TService</NavLinkStyled>;
};
