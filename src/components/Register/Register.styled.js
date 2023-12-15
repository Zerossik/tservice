import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 15px;
  padding: 44px;

  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.primary};
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 32px;
`;

export const FormButton = styled.button`
  position: relative;
  height: 40px;
  padding: 10px 20px;

  font-weight: 500;
  color: ${({ theme }) => theme.color.btnFont};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.btnBorder};
  background-color: ${({ theme }) => theme.color.btnBg};

  &:disabled {
    color: ${({ theme }) => theme.color.btnBg};
    border: 1px solid ${({ theme }) => theme.color.btnBg};
    background-color: ${({ theme }) => theme.color.bgSecondary};
    cursor: ${({ loading }) => (loading ? "wait" : "not-allowed")};
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.link};
`;

export const Text = styled.p`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
