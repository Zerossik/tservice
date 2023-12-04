import styled from "styled-components";
import { HiUserCircle, HiCog6Tooth } from "react-icons/hi2";
import { Container } from "../../pages/ServicePage/ServicePage.styled";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

export const HeaderContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h2`
  color: ${({ theme }) => theme.color.logo};
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.primary};
`;

export const UserName = styled.h3`
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary};
`;

export const IconUser = styled(HiUserCircle)`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.color.iconMain};
`;

export const IconSettings = styled(HiCog6Tooth)`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.color.iconMain};
`;

export const DropDownList = styled.ul`
  box-sizing: content-box;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.dropDownBg};
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const DropDownItem = styled.li`
  padding: 10px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.color.dropDownHover};
  }
`;
