import styled from "styled-components";

export const LabelStyled = styled.label`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.primary};
`;
