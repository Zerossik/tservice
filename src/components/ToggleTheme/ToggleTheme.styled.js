import styled from "styled-components";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const IconSun = styled(HiOutlineSun)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.color.iconMain};
`;

export const IconMoon = styled(HiOutlineMoon)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.color.iconMain};
`;

export const Button = styled.button`
  padding: 4px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.bgSecondary};
`;
