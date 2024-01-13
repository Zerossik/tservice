import styled from "styled-components";
import { HiPencilSquare } from "react-icons/hi2";

export const Button = styled.button`
  padding: 6px;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  color: ${({ theme }) => theme.color.iconMain};
  /* transition: color 200ms ease-in-out; */

  &:hover {
    color: ${({ theme }) => theme.color.third};
  }
`;

export const Icon = styled(HiPencilSquare)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
