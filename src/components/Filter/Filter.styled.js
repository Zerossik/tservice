import styled from "styled-components";
import { HiPlusCircle } from "react-icons/hi2";

export const Wrapper = styled.div`
  display: flex;
  gap: 48px;
  padding: 18px 36px;
`;

export const ButtonIconPlus = styled.button`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
  color: ${({ theme }) => theme.color.iconPlus};

  &:disabled {
    color: ${({ theme }) => theme.color.iconPlusDisabled};
    cursor: not-allowed;
  }
`;

export const IconPlus = styled(HiPlusCircle)`
  width: 42px;
  height: 42px;
  fill: currentColor;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
`;

export const SortList = styled.ul`
  display: flex;
  width: 100%;
  height: 48px;
`;

export const SortItem = styled.li``;

export const Button = styled.button``;

export const Wrap = styled.div`
  display: flex;
  gap: 48px;
`;
