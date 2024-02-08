import styled from "styled-components";
import { HiUserCircle, HiCog6Tooth } from "react-icons/hi2";
import { Container } from "../../pages/ServicePage/ServicePage.styled";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
`;

export const HeaderContainer = styled(Container)`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 150px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.dropDownBg};
  box-shadow: ${({ theme }) => theme.color.shadow};
  overflow: hidden;
`;

export const DropDownItem = styled.li`
  &:last-child {
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.color.border};
  }
`;

export const ItemTitle = styled.p`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.primary};
`;
