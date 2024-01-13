import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// style
import { Button, Icon } from "./ButtonListEdit.styled";
import {
  editDeviceManufacturerThunk,
  editDeviceTypeThunk,
} from "../../redux/settingsUser/settingsUserThunks";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";
import { Loader } from "../Loader/Loader";

export const ButtonListEdit = ({ fildName, selectName }) => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const dispatch = useDispatch();

  const editType = (oldType, newType) => {
    dispatch(editDeviceTypeThunk({ oldType, newType }))
      .unwrap()
      .then(() => {
        toast.success("Тип техніки змінено");
      })
      .catch(() => {
        toast.warning("Щось пішло не так, спробуйте ще раз");
      });
  };

  const editManufacturer = (oldManufacturer, newManufacturer) => {
    dispatch(editDeviceManufacturerThunk({ oldManufacturer, newManufacturer }))
      .unwrap()
      .then(() => {
        toast.success("Виробника змінено");
      })
      .catch(() => {
        toast.warning("Щось пішло не так, спробуйте ще раз");
      });
  };

  const handleClick = (oldName, selectType) => {
    const newType = prompt("Введіть нову назву");
    if (newType === null || newType.trim() === "") return;

    switch (selectType) {
      case "type":
        editType(oldName, newType);
        break;

      case "manufacturer":
        editManufacturer(oldName, newType);
        break;

      default:
        toast.warning("Щось пішло не так, спробуйте ще раз");
    }
  };

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Button type="button" onClick={() => handleClick(fildName, selectName)}>
        <Icon />
      </Button>
    </>
  );
};

ButtonListEdit.propTypes = {
  fildName: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
};
