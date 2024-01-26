import styled from "styled-components";
import { HiPencilSquare } from "react-icons/hi2";
import { HiMiniArrowLongDown } from "react-icons/hi2";

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const Row = styled.tr`
  height: 48px;
`;

export const Thead = styled.thead`
  font-weight: 700;

  & th:nth-child(1) {
    width: 10%;
  }

  /* & th:nth-child(3) {
    width: 10%;
  } */

  /* & th:nth-child(4) {
    width: 10%;
  } */

  & th:last-child {
    width: 5%;
  }
`;

export const TableHead = styled.th`
  background-color: ${({ theme }) => theme.color.tableHead};
`;

export const Cell = styled.td`
  text-align: center;
  background-color: ${({ theme }) => theme.color.tableCell};
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  font-weight: 700;
  /* color: ${({ theme, $isActive }) =>
    theme.color[$isActive ? "third" : "primary"]};
  cursor: default; */
  background-color: transparent;
`;

export const IconSort = styled(HiMiniArrowLongDown)`
  width: 20px;
  height: 20px;
  fill: currentColor;
  transform: ${({ $sortDown }) => `rotate(${$sortDown ? "0" : "180"}deg)`};
`;

export const ButtonIconEdit = styled.button`
  padding: 10px;
  border-radius: 50%;
  background-color: transparent;
`;

export const IconEdit = styled(HiPencilSquare)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.color.iconMain};
`;
