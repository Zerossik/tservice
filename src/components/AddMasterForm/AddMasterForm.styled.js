import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: nowrap;
  gap: 20px;
  width: 100%;
  /* max-width: 500px; */
  background-color: aliceblue;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.primary};
`;
