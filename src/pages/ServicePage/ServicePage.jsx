import { NavLink, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
// styled
import { Wrapper, Container } from "./ServicePage.styled";

export const ServicePage = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <header>
        <Container>
          <h1>Vite + React</h1>
          <ul>
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/auth/login`}>Your Login</NavLink>
            </li>
            <li>
              <NavLink to={`/auth/register`}>Your Register</NavLink>
            </li>
          </ul>
          <button type="button" onClick={toggleTheme}>
            BUTTON TOGGLE THEME
          </button>
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </Wrapper>
  );
};

ServicePage.propTypes = {
  toggleTheme: PropTypes.func,
};
