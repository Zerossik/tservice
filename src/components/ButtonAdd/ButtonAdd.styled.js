import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.color.iconMain};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
  outline: none;

  & > svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    opacity: 0.5;
  }
`;
