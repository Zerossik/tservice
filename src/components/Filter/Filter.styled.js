import styled from "styled-components";
import { HiPlusCircle } from "react-icons/hi2";

export const Wrapper = styled.div`
  padding: 18px 36px;
`;

export const ButtonIconPlus = styled.button`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const IconPlus = styled(HiPlusCircle)`
  width: 42px;
  height: 42px;
  fill: ${({ theme }) => theme.color.iconPlus};
`;

export const SearchWrapper = styled.div``;

export const SortList = styled.ul`
  display: flex;
  width: 100%;
  height: 48px;
`;

export const SortItem = styled.li``;

export const Button = styled.button``;
