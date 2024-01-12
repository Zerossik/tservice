import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2px 8px;
  background-color: #121417;
  border-radius: 6px;
`;

export const LogoText = styled.p`
  font-family: ${({ theme }) => theme.font.logo};
  font-size: 24px;
  letter-spacing: 1px;
  color: white;
`;
