// components
import { WorkTable } from "../WorkTable/WorkTable";
// style
import { Wrapper, SearchWrapper } from "./Filter.styled";

export const Filter = () => {
  return (
    <Wrapper>
      <SearchWrapper>SearchWrapper</SearchWrapper>
      <WorkTable />
    </Wrapper>
  );
};
