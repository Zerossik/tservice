import styled from "styled-components";

export const ButtonArch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 160px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid
    ${({ theme, $isArchive }) => theme.color[$isArchive ? "third" : "border"]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
  outline: none;
`;

export const BtnText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme, $isArchive }) =>
    theme.color[$isArchive ? "third" : "iconMain"]};
  opacity: ${({ $isArchive }) => ($isArchive ? "1" : "0.5")};
`;
