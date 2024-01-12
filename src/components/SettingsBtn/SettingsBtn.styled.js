import styled from "styled-components";
// import { HiCpuChip, HiMiniUsers, HiMiniInboxArrowDown } from "react-icons/hi2";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.iconMain};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.border};

  & > svg {
    width: 43px;
    height: 43px;
    fill: currentColor;
    opacity: 0.5;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

export const Item = styled.li`
  flex-grow: 1;
  /* position: relative; */
  /* padding: 10px 0; */

  &:not(:last-child) {
    /* border-bottom: 1px solid ${({ theme }) => theme.color.border}; */
  }

  // export const IconType = styled(HiCpuChip)
`;
//   width: 43px;
//   height: 43px;
//   fill: currentColor;
//   opacity: 0.5;
// `;

// export const IconManufacturer = styled(HiMiniInboxArrowDown)`
//   width: 43px;
//   height: 43px;
//   fill: ${({ theme }) => theme.color.iconMain};
//   opacity: 0.5;
// `;

// export const IconMaster = styled(HiMiniUsers)`
//   width: 43px;
//   height: 43px;
//   fill: ${({ theme }) => theme.color.iconMain};
//   opacity: 0.5;
// `;
