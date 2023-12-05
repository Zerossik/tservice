import styled from "styled-components";
import { HiPower } from "react-icons/hi2";

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-color: ${({ theme }) => theme.color.backDrop};
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  z-index: 91;
  background-color: transparent;
  cursor: pointer;
`;

export const IconClose = styled(HiPower)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.color.iconMain};
`;
