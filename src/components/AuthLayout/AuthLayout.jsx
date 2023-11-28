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
import { selectIsLoading } from "../../redux/auth/selectors";

export const AuthLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useLoaderData();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      navigate(`/${PATHS.CONTACTS}`, { replace: true });
    }
  }, [dispatch, navigate, user]);

  return (
    <Wrapper>
      <Suspense fallback={<Loader isLoading={isLoading} />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
