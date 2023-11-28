import styled from "styled-components";
import { NavLink } from "react-router-dom";
import IcnGear from "../../assets/icons/gear-loader.svg?react";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 15px;
  padding: 44px;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.6);

  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1),
    0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label.attrs({ className: "visually-hidden" })``;

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 6px 40px 6px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.6);
  outline: none;
`;

export const Error = styled.div`
  position: absolute;
  bottom: -90;
  right: 0;
  text-align: right;
  color: #ff8500;
`;

export const FormButton = styled.button`
  position: relative;
  height: 40px;
  padding: 10px 20px;

  font-weight: bold;
  color: #fff;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #007aff;

  &:disabled {
    color: #007aff;
    border: 1px solid #007aff;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: ${({ loading }) => (loading ? "wait" : "not-allowed")};
  }
`;

export const IconLoader = styled(IcnGear)`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 25px;
  height: 25px;
  fill: #007aff;
  animation: rotationGear 3s linear infinite;

  @keyframes rotationGear {
    from {
      transform: translate(0, -50%) rotate(0deg);
    }
    to {
      transform: translate(0, -50%) rotate(360deg);
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  text-decoration: underline;
`;

export const Text = styled.p`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
