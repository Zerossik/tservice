import styled from "styled-components";
import { HiOutlineChevronUp } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
`;

export const ButtonClear = styled.button`
  position: absolute;
  bottom: -50%;
  right: 40px;
  transform: translate(0, -50%);
  width: 40px;
  height: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.iconMain};
  background-color: transparent;
`;

export const IconClear = styled(HiMiniXMark)`
  width: 100%;
  height: 100%;
  fill: currentColor;
  opacity: 0.8;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 6px 40px 6px 12px;
  color: ${({ theme }) => theme.color.primary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme, readOnly }) =>
    theme.color[readOnly ? "readOnlyBg" : "bgSecondary"]};
  outline: none;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  border: 1px solid ${({ theme }) => theme.color.border};
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
  ${({ list }) => `${list === "top" ? "bottom" : "top"}: calc(100% + 4px)`};
  /* top: calc(100% + 4px); */
  /* bottom: calc(100% + 4px); */
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

export const ListNoItem = styled.li`
  width: 100%;
  padding: 8px 12px;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  opacity: 0.5;
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
    /* background-color: ${({ theme }) => theme.color.dropDownHover}; */
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
