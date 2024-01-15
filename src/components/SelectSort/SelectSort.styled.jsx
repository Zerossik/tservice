import styled from "styled-components";
import { HiOutlineChevronUp } from "react-icons/hi2";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 6px 40px 6px 12px;
  color: ${({ theme }) => theme.color.primary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-right: none;
  background-color: ${({ theme, readOnly }) =>
    theme.color[readOnly ? "readOnlyBg" : "bgSecondary"]};
  outline: none;
`;

export const FakeInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 6px 40px 6px 12px;
  color: ${({ theme }) => theme.color.primary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-right: none;
  background-color: ${({ theme, readOnly }) =>
    theme.color[readOnly ? "readOnlyBg" : "bgSecondary"]};
  outline: none;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-left: none;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.extraSmall};
`;

export const IconOpenList = styled(HiOutlineChevronUp)`
  width: 100%;
  height: 100%;
  stroke: currentColor;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "none")};
`;

export const List = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 10;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background-color: ${({ theme }) => theme.color.dropDownBg};
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const ListItem = styled.li`
  display: flex;
  padding-right: 6px;
  width: 100%;
`;

export const ButtonList = styled.button`
  width: 100%;
  padding: 8px 12px;
  color: ${({ theme }) => theme.color.primary};
  text-align: left;
  background-color: transparent;

  &:hover {
    font-weight: 600;
    color: ${({ theme }) => theme.color.third};
  }
`;
