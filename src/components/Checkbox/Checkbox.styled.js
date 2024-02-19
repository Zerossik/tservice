import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const InputCheckboxStyled = styled.input`
  width: 20px;
  height: 20px;
`;

export const LabelCheckboxStyled = styled.label`
  color: ${({ theme }) => theme.color.primary};
  white-space: nowrap;
`;
