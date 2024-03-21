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

export const LogoWrapper = styled.div`
  margin-bottom: 30px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const Button = `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 18px;
  font-weight: 500;
`;

export const ButtonStyled = styled.button`
  ${Button}

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

export const NavLinkStyled = styled(NavLink)`
  ${Button}

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
