import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 91;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backDrop};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.modalBg};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
`;

export const MessageWrap = styled.div``;

export const Message = styled.p`
  margin-bottom: 20px;
  padding: 10px;
  max-width: 250px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 20px;
`;

export const ListItem = styled.li``;
