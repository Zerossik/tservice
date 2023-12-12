import styled from "styled-components";

export const FormStyled = styled.form``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  grid-column-gap: 10px;
  grid-row-gap: 16px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItemArea = styled.li`
  @media screen and (min-width: 767px) {
    grid-column: span 2;
  }
`;

export const ListItemLast = styled.li`
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 767px) {
    grid-column: span 2;
  }
`;

export const InputPhoneWrapper = styled.div`
  position: relative;
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
