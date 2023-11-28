import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #a7b3c7;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.6);

  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1),
    0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
`;

export const NavLinkStyled = styled(NavLink)`
  margin-top: 10px;
  padding: 8px;
  font-size: 20px;

  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.6);

  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1),
    0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
`;
