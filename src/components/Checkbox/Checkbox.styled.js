import styled from "styled-components";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";

export const InputCheckboxStyled = styled.input`
  position: absolute;
  appearance: none;

  &:disabled + span {
    color: ${({ theme }) => theme.color.primary};
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Icon = `
  width: 100%;
  height: 100%;
  fill: currentColor;
`;

export const IconBorder = styled(ImCheckboxUnchecked)`
  ${Icon}
`;

export const IconChecked = styled(ImCheckboxChecked)`
  ${Icon}
`;

export const FakeCheckox = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.color.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.superSmall};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  overflow: hidden;
`;

export const LabelCheckboxStyled = styled.label`
  padding-left: 34px;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.primary};
  white-space: nowrap;
`;
