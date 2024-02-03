// style
import { Wrapper, PageButtonIcon, PageButtonNumber } from "./Pagination.styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <PageButtonIcon />
      <PageButtonNumber>1</PageButtonNumber>
      <PageButtonIcon />
    </Wrapper>
  );
};
