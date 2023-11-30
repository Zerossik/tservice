import { Suspense } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/path";
// styled
import { Wrapper } from "./AuthLayout.styled";
import { useEffect } from "react";
import { setUser } from "../../redux/auth/authSlice";
import { Loader } from "../Loader";
import {
  selectIsLoading,
  selectIsLogin,
  selectUser,
} from "../../redux/auth/selectors";

export const AuthLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useLoaderData();
  const isLoggedIn = useSelector(selectIsLogin);
  const isLoading = useSelector(selectIsLoading);
  const userState = useSelector(selectUser);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(PATHS.SERVICES, { replace: true });
      return;
    }

    if (user && !isLoggedIn) {
      dispatch(setUser(user));
      navigate(PATHS.SERVICES, { replace: true });
    }
  }, [dispatch, navigate, user, isLoggedIn, userState]);

  return (
    <Wrapper>
      <Suspense fallback={<Loader isLoading={isLoading} />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
