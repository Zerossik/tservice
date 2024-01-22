import styled from "styled-components";

export const Wrapper = styled.form``;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  /* border: 1px solid ${({ theme }) => theme.color.border}; */
  /* background-color: ${({ theme }) => theme.color.bgSecondary}; */
  outline: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;
