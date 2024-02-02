import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 2px 8px;
  font-family: ${({ theme }) => theme.font.logo};
  font-size: 24px;
  letter-spacing: 1px;
  color: white;
  background-color: #121417;
  border-radius: 6px;
`;
