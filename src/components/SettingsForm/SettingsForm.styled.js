import styled from "styled-components";

export const FormStyled = styled.form``;

export const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
`;

export const LegendStyled = styled.legend`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};
`;
