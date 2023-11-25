import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
// styled
import { Wrapper, Container } from "./Layout.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux/auth/selectors";
import { token } from "../../services/authAPI";
import { getCurrentUserThunk } from "../../redux/auth/authThunks";

const Layout = ({ toggleTheme }) => {
  const access_token = useSelector(selectToken);
  const { isLogin } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token && !isLogin) {
      token.setToken(access_token);
      dispatch(getCurrentUserThunk());
    }
  }, [access_token, dispatch, isLogin]);
  return (
    <Wrapper>
      <Container>
        <header>
          <h1>Vite + React</h1>
          <button type="button" onClick={toggleTheme}>
            BUTTON TOGGLE THEME
          </button>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>Footer</footer>
      </Container>
    </Wrapper>
  );
};

Layout.propTypes = {
  toggleTheme: PropTypes.func,
};

export default Layout;
