import PropTypes from "prop-types";
// style
import { NavLinkStyled } from "./NavLink.styled";

export const NavLinkForm = ({ path, textLink }) => {
  return <NavLinkStyled to={path}>{textLink}</NavLinkStyled>;
};

NavLinkForm.propTypes = {
  path: PropTypes.string.isRequired,
  textLink: PropTypes.string.isRequired,
};
