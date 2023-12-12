import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 12px;
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  outline: none;
  resize: none;
`;
