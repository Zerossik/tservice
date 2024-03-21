import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
`;

export const Text = styled.p`
  margin: 30px 0 20px 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 18px;
  font-weight: 500;

  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.btnFont};
  border: 1px solid ${({ theme }) => theme.color.btnBorder};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.btnBg};

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  }

  @media (max-width: 375px) {
    border-radius: ${({ theme }) => theme.borderRadius.superSmall};
  }
`;
