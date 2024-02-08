import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
`;

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
