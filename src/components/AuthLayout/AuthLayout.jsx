import { Outlet } from "react-router-dom";
// styled
import { Wrapper } from "./AuthLayout.styled";

export const AuthLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
