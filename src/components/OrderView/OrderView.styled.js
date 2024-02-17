import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-y: auto;

  // firefox
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.color.bgSecondary} transparent;

  &::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) =>
      theme.color.bgSecondary}; /* Цвет скролла */
  }
`;

export const WrapperTable = styled.div`
  margin-bottom: 20px;
  border: 1px solid #66b0ff;

  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px inset;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 576px;
  border-collapse: collapse;

  /* & td:last-child {
  } */
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const Row = styled.tr`
  /* &:nth-child(even) {
  } */

  &:not(:last-child) {
    border-bottom: 1px solid #80bdff;
  }
`;

export const HeaderCells = styled.th`
  padding: 6px 36px 6px 12px;
  color: ${({ theme }) => theme.color.tableFont};

  text-align: start;
  background-color: #4da2ff;
`;

export const Cell = styled.td`
  padding: 6px 12px;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.modalBg};
  white-space: pre-wrap;
`;
