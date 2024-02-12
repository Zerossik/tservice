import styled from "styled-components";

export const FormStyled = styled.form``;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.primary};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;
