import styled from "styled-components";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 20px 0;
`;

export const PagesList = styled.ul`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const PagesListItem = styled.li`
  width: 40px;
  height: 40px;
`;

export const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme, $active }) =>
    theme.color[$active ? "secondary" : "primary"]};
  border: 1px solid
    ${({ theme, $active }) => theme.color[$active ? "secondary" : "tableCell"]};
  border-radius: ${({ theme }) => theme.borderRadius.superSmall};
  background-color: ${({ theme }) => theme.color.tableCell};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.secondary};
    cursor: default;
  }
`;

export const Dots = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};
  background-color: transparent;
`;

export const IconLeft = styled(HiChevronDoubleLeft)`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;

export const IconRight = styled(HiChevronDoubleRight)`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;
