import styled from "styled-components";
import { Container } from "../../pages/ServicePage/ServicePage.styled";

export const FooterStyled = styled.footer`
  height: 44px;
  background-color: ${({ theme }) => theme.color.bg};
`;

export const FooterContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Copyright = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  line-height: 1.42;
  color: ${({ theme }) => theme.color.footerFont};
`;
