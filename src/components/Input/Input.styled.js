import styled from "styled-components";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

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

export const ButtonShowPass = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  padding: 6px;
  color: ${({ theme }) => theme.color.primary};
  background-color: transparent;
  opacity: 0.2;
`;

export const IconOpenEye = styled(HiEye)`
  width: 100%;
  height: 100%;
  color: currentColor;
`;

export const IconCloseEye = styled(HiEyeSlash)`
  width: 100%;
  height: 100%;
  color: currentColor;
`;
