import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  color: ${({ theme }) => theme.color.primary};
  background-color: transparent;
`;
