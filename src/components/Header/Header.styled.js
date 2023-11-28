import styled from "styled-components";
import { Container } from "../../pages/ServicePage/ServicePage.styled";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 88px;
  background-color: #e9f3ff;
`;

export const HeaderContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h2`
  color: #0b68f3;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: #007aff;
  border: 1px solid #007aff;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const UserName = styled.h3`
  color: #000;
`;
