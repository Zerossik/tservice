import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutThink } from "../../redux/auth/authThunks";
import { toast } from "react-toastify";
// styled
import { Button, IconLogOut } from "./LogOut.styled";
// components
import { PATHS } from "../../constants";
import { selectIsLoading } from "../../redux/auth/selectors";

export const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const handleClickLogOut = async () => {
    try {
      await dispatch(logoutThink()).unwrap();
      toast.success(`Ви успішно вийшли із системи`);
      navigate(`${PATHS.BASE}`, { replace: true });
    } catch (error) {
      toast.warning(`Щось пішло не так:) Спробуйте ще раз`);
    }
  };

  return (
    <Button type="button" onClick={handleClickLogOut} disabled={isLoading}>
      Вийти
      <IconLogOut />
    </Button>
  );
};
