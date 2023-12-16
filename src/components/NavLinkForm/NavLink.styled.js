import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.link};
`;
