import { Suspense } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { PATHS } from "../../constants/path";
// styled
import { Wrapper } from "./AuthLayout.styled";
import { useEffect } from "react";
import { setUser } from "../../redux/auth/authSlice";
import { Loader } from "../Loader";
import { selectIsLoading, selectIsLogin } from "../../redux/auth/selectors";

export const AuthLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useLoaderData();
  const isLoggedIn = useSelector(selectIsLogin);
  const isLoading = useSelector(selectIsLoading);
  // "from" сетится в AuthRequired лоадере
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  useEffect(() => {
    if (isLoggedIn) {
      // перекинуть туда откуда пользователь зашел
      navigate(from.split("/")[2], { replace: true });
      // navigate(PATHS.SERVICES, { replace: true });
      return;
    }

    if (user && !isLoggedIn) {
      dispatch(setUser(user));
      // перекинуть туда откуда пользователь зашел
      navigate(from.split("/")[2], { replace: true });
      // navigate(PATHS.SERVICES, { replace: true });
    }
  }, [dispatch, navigate, user, isLoggedIn, from]);

  return (
    <Wrapper>
      <Suspense fallback={<Loader isLoading={isLoading} />}>
        {!isLoggedIn && <Outlet />}
      </Suspense>
    </Wrapper>
  );
};
