import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.bg};
  overflow-y: auto;
`;
