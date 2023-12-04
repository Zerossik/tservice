import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import IcnGear from "../../assets/icons/gear-loader.svg?react";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 15px;
  padding: 44px;

  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.primary};
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
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: -90;
  right: 0;
  text-align: right;
  color: ${({ theme }) => theme.color.error};
`;

export const FormButton = styled.button`
  position: relative;
  height: 40px;
  padding: 10px 20px;

  font-weight: 500;
  color: ${({ theme }) => theme.color.btnFont};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.btnBorder};
  background-color: ${({ theme }) => theme.color.btnBg};

  &:disabled {
    color: ${({ theme }) => theme.color.btnBg};
    border: 1px solid ${({ theme }) => theme.color.btnBg};
    background-color: ${({ theme }) => theme.color.bgSecondary};
    cursor: ${({ loading }) => (loading ? "wait" : "not-allowed")};
  }
`;

// export const IconLoader = styled(IcnGear)`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   width: 25px;
//   height: 25px;
//   fill: #007aff;
//   animation: rotationGear 3s linear infinite;

//   @keyframes rotationGear {
//     from {
//       transform: translate(0, -50%) rotate(0deg);
//     }
//     to {
//       transform: translate(0, -50%) rotate(360deg);
//     }
//   }
// `;

export const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.link};
`;

export const Text = styled.p`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
