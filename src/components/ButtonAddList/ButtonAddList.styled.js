import styled from "styled-components";

export const ListOfButtons = styled.ul`
  display: flex;
  gap: 14px;
`;

export const ItemOfButtons = styled.li`
  width: 40px;
  height: 40px;
`;

export const ItemButtonArchive = styled.li`
  width: 160px;
  height: 40px;
`;

export const ButtonArchive = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid
    ${({ theme, $isArchive }) => theme.color[$isArchive ? "third" : "border"]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
  outline: none;
`;

export const ButtonText = styled.span`
  font-size: ${({ theme, $isArchive }) =>
    theme.fontSize[$isArchive ? "md" : "md"]};
  font-weight: 500;
  color: ${({ theme, $isArchive }) =>
    theme.color[$isArchive ? "third" : "iconMain"]};
  opacity: ${({ $isArchive }) => ($isArchive ? "1" : "0.5")};
`;
