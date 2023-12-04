import styled from "styled-components";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.primary};
`;

export const IconLogOut = styled(HiArrowRightOnRectangle)`
  width: 20px;
  height: 20px;
`;
