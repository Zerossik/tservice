import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// style
import { Wrapper, Button, IconSun, IconMoon } from "./ToggleTheme.styled";
// components
import { changeThemeThunk } from "../../redux/auth/authThunks";

export const ToggleTheme = ({ style }) => {
  const dispatch = useDispatch();

  const handleClick = (theme) => {
    dispatch(changeThemeThunk(theme))
      .unwrap()
      .then()
      .catch(() => toast.warning("Щось пішло не так спробуйте ще раз"));
  };

  return (
    <Wrapper>
      <Button style={style} type="button" onClick={() => handleClick("light")}>
        <IconSun />
      </Button>
      <Button style={style} type="button" onClick={() => handleClick("dark")}>
        <IconMoon />
      </Button>
    </Wrapper>
  );
};

ToggleTheme.propTypes = {
  style: PropTypes.object,
};
