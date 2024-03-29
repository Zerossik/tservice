import styled from "styled-components";
// import { HiPencilSquare } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export const Button = styled.button`
  padding: 6px;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  color: ${({ theme }) => theme.color.iconMain};
  opacity: 0.5;
  /* transition: color 200ms ease-in-out; */

  &:hover {
    color: ${({ theme }) => theme.color.third};
    opacity: 1;
  }
`;

export const Icon = styled(HiOutlinePencilSquare)`
  width: 16px;
  height: 16px;
  /* fill: currentColor; */
  stroke: currentColor;
`;
