import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// styled
import {
  HeaderStyled,
  HeaderContainer,
  Logo,
  ButtonWrapper,
  Button,
  UserName,
} from "./Header.styled";
// components
import { Loader } from "../Loader";
import { logoutThink } from "../../redux/auth/authThunks";
import { selectIsLoading, selectUser } from "../../redux/auth/selectors";

export const Header = ({ toggleTheme }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  const handleClickLogOut = async () => {
    try {
      await dispatch(logoutThink()).unwrap();
      toast.success(`Ви успішно вийшли із системи`);
    } catch (error) {
      toast.warning(`Щось пішло не так:) Спробуйте ще раз`);
    }
  };

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <HeaderStyled>
        <HeaderContainer>
          <Logo>TService</Logo>
          <ButtonWrapper>
            <Button type="button" onClick={toggleTheme}>
              Toggle Theme
            </Button>

            <UserName>{user ? user.name : "Anonimus"}</UserName>

            <Button
              type="button"
              onClick={handleClickLogOut}
              disabled={isLoading}
            >
              LogOut
            </Button>
          </ButtonWrapper>
        </HeaderContainer>
      </HeaderStyled>
    </>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func,
};
