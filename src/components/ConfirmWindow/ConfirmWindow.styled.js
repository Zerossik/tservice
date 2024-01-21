import styled from "styled-components";

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 91;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*   background-color: ${({ theme }) => theme.color.backDrop}; */
  background-color: transparent;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 100%;
  height: auto;
  background-color: bisque;
`;
