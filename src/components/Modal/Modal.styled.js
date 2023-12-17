import styled from "styled-components";
import { HiPower } from "react-icons/hi2";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-color: ${({ theme }) => theme.color.backDrop};
  overflow-y: scroll;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 960px;
  padding: 40px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.modalBg};
  box-shadow: ${({ theme }) => theme.color.shadow};

  @media screen and (max-width: 1021px) {
    width: calc(100% - 30px);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  z-index: 91;
  color: ${({ theme }) => theme.color.iconMain};
  background-color: transparent;
  cursor: pointer;
  transition: color 300ms ease-in-out;

  &:hover {
    color: red;
  }
`;

export const IconClose = styled(HiPower)`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;
