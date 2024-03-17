import styled from "styled-components";
import { HiOutlineViewColumns } from "react-icons/hi2";

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.dropDownBg};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
  overflow: hidden;
`;

export const ButtonChoose = styled.button`
  width: 42px;
  height: 42px;
  padding: 5px;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
`;

export const IconChoose = styled(HiOutlineViewColumns)`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  stroke: currentColor;
`;

export const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

export const DropDownItem = styled.li`
  width: 100%;
  /* height: 24px; */
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};

  &.dragging {
    opacity: 0.1;
    background-color: ${({ theme }) => theme.color.bg};
  }
`;

export const ButtonSaveWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
