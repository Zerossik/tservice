import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  /* border-radius: 12px; */
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
  }

  & th:nth-child(4) {
    width: 10%;
  }

  & th:nth-child(5) {
    width: 10%;
  } */
`;

export const TableHead = styled.th`
  background-color: ${({ theme }) => theme.color.tableHead};
`;

export const Cell = styled.td`
  text-align: center;
  background-color: #f4f3f3;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  font-weight: 700;
  cursor: default;
  background-color: transparent;
`;
