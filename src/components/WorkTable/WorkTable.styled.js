import styled from "styled-components";
import { HiPencilSquare } from "react-icons/hi2";
import { HiMiniArrowLongDown } from "react-icons/hi2";

export const Table = styled.table`
  position: relative;
  width: 100%;
  table-layout: fixed;
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
  border-collapse: collapse;
`;

export const Row = styled.tr`
  height: 48px;

  &:nth-child(odd) td {
    background-color: ${({ theme }) => theme.color.tableRow};
  }

  &:hover td {
    background-color: ${({ theme }) => theme.color.tableRowHover};
  }
`;

export const Thead = styled.thead`
  font-weight: 700;

  /* & th:nth-child(1) {
    width: 5%;
  } */

  /* & th:nth-child(3) {
    width: 10%;
  } */

  /* & th:nth-child(4) {
    width: 10%;
  } */

  & th:last-child {
    width: 48px;
  }
`;

export const TableHead = styled.th`
  position: sticky;
  color: ${({ theme }) => theme.color.tableFont};
  background-color: ${({ theme }) => theme.color.tableHead};
`;

export const TableBody = styled.tbody``;

export const Cell = styled.td`
  text-align: center;
  background-color: ${({ theme }) => theme.color.tableCell};
  white-space: pre-wrap;
`;

export const RowNoItem = styled.tr`
  height: 48px;
`;

export const CellNoItem = styled.td`
  padding: 0;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.tableCell};
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.tableFont};
  /* color: ${({ theme, $isActive }) =>
    theme.color[$isActive ? "third" : "primary"]}; */
  cursor: default;
  background-color: transparent;

  /* &:hover {
    color: ${({ theme }) => theme.color.third};
  } */
`;

export const IconSort = styled(HiMiniArrowLongDown)`
  width: 20px;
  height: 20px;
  fill: currentColor;
  transform: ${({ $sortDown }) => `rotate(${$sortDown ? "0" : "180"}deg)`};
`;

export const ButtonIconEdit = styled.button`
  padding: 14px;
  color: ${({ theme }) => theme.color.iconMain};
  border-radius: 50%;
  background-color: transparent;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const IconEdit = styled(HiPencilSquare)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
