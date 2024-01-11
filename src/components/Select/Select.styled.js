import styled from "styled-components";
import { HiOutlineChevronUp } from "react-icons/hi2";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
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
  /* top: ${({ list }) => (list === "top" ? "-100%" : "calc(100% + 4px)")}; */
  left: 0;
  z-index: 10;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background-color: ${({ theme }) => theme.color.dropDownBg};
  box-shadow: ${({ theme }) => theme.color.shadow};

  /* &:has(.modal-body) {
    overflow: visible;
  } */
`;

export const ListItem = styled.li`
  width: 100%;
`;

export const ListNoItem = styled(ListItem)`
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
    background-color: ${({ theme }) => theme.color.dropDownHover};
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
