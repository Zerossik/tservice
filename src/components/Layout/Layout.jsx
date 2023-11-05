import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
// styled
import { Wrapper, Container } from "./Layout.styled";

const Layout = ({ toggleTheme }) => {
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
