import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Wrapper = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
`;

export const Form = styled.form`
  display: flex;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  /* border: 1px solid ${({ theme }) => theme.color.secondary}; */
  border-left: none;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.extraSmall};
`;

export const IconSearch = styled(HiMagnifyingGlass)`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;
