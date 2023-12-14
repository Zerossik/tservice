import styled from "styled-components";

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

export const Text = styled.p`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
