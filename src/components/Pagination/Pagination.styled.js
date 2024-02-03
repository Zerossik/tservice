import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.superSmall};
  box-shadow: ${({ theme }) => theme.color.shadowSecond};
`;

export const PageButtonIcon = styled(PageButton)``;

export const PageButtonNumber = styled(PageButton)``;
