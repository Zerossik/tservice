import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 6px 40px 6px 12px;
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  outline: none;
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 50%;
  left: 12px;
  color: ${({ theme }) => theme.color.placeholder};
  transform: translateY(-50%);
  transition: transform 250ms linear, color 250ms linear;

  ${InputStyled}:focus + &,
  ${InputStyled}:not(:placeholder-shown) + & {
    transform: translateY(calc(-100% - 22px));
    /* color: ${({ theme }) => theme.color.primary}; */
  }
`;
