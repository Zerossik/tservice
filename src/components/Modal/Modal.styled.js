import styled from "styled-components";
import { HiPower } from "react-icons/hi2";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  z-index: 90;
  background-color: ${({ theme }) => theme.color.backDrop};
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: 100%;
  max-width: 960px;
  overflow: auto;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.modalBg};
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const ModalBody = styled.div`
  padding: 29px 40px 24px 40px;
  max-height: 100%;
  overflow-y: auto;
  margin: 1px 0 6px 0;

  &::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    // firefox
    scrollbar-width: thin;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) =>
      theme.color.bgSecondary}; /* Цвет скролла */
    // firefox
    scrollbar-color: ${({ theme }) => theme.color.bgSecondary} transparent;
  }
`;

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
`;

export const ButtonClose = styled.button`
  width: 24px;
  height: 24px;
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
