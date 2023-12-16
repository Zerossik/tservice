import styled from "styled-components";

export const ButtonStyled = styled.button`
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
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;
