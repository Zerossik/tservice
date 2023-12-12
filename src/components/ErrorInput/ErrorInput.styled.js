import styled from "styled-components";

export const Error = styled.p`
  position: absolute;
  top: 100%;
  right: 0;
  text-align: right;
  color: ${({ theme }) => theme.color.error};
`;
