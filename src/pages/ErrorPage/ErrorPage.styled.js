import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.bg};
  overflow-y: auto;
`;

export const ImgWrapper = styled.div`
  position: relative;
  max-width: 768px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
`;

export const SvgStyle = styled.svg`
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgStyle = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavLinkStyled = styled(NavLink)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  padding: 10px 20px;

  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  color: ${({ theme }) => theme.color.btnFont};
  border: 1px solid ${({ theme }) => theme.color.btnBorder};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.btnBg};

  @media (max-width: 480px) {
    height: 36px;
    padding: 8px 12px;
    font-size: ${({ theme }) => theme.fontSize.md};
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  }

  @media (max-width: 375px) {
    height: 26px;
    padding: 8px 12px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.superSmall};
  }
`;
