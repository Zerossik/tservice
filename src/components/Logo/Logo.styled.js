import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 2px 8px;
  font-family: ${({ theme }) => theme.font.logo};
  font-size: 24px;
  letter-spacing: 1px;
  color: #ffffff;
  background-color: #121417;
  border-radius: 6px;
`;
