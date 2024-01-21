import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// style
import { Button, Icon } from "./ButtonListEdit.styled";
// components
import {
  editDeviceManufacturerThunk,
  editDeviceTypeThunk,
} from "../../redux/settingsUser/settingsUserThunks";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";
import { Loader } from "../Loader/Loader";
import { useConfirm } from "../ConfirmService/context";
import { TypeEditForm } from "../TypeEditForm";
import { ManufacturerEditForm } from "../ManufacturerEditForm/ManufacturerEditForm";

export const ButtonListEdit = ({ fildName, selectName, closeList }) => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const dispatch = useDispatch();
  const confirm = useConfirm();

  const editType = (oldType, newType) => {
    console.log(oldType, newType);
    // setIsOpen(false);
    // dispatch(editDeviceTypeThunk({ oldType, newType }))
    //   .unwrap()
    //   .then(() => {
    //     toast.success("Тип техніки змінено");
    //   })
    //   .catch(() => {
    //     toast.warning("Щось пішло не так, спробуйте ще раз");
    //   });
  };

  const editManufacturer = (oldManufacturer, newManufacturer) => {
    console.log(oldManufacturer, newManufacturer);
    // setIsOpen(false);
    // dispatch(editDeviceManufacturerThunk({ oldManufacturer, newManufacturer }))
    //   .unwrap()
    //   .then(() => {
    //     toast.success("Виробника змінено");
    //   })
    //   .catch(() => {
    //     toast.warning("Щось пішло не так, спробуйте ще раз");
    //   });
  };

  const handleClickOk = (oldName, selectType, newName) => {
    switch (selectType) {
      case "type":
        editType(oldName, newName);
        break;

      case "manufacturer":
        editManufacturer(oldName, newName);
        break;

      default:
        toast.warning("Щось пішло не так, спробуйте ще раз");
    }
  };

  const handleClick = (oldFildName, select) => {
    closeList(false);

    let component = null;

    switch (select) {
      case "type":
        component = (
          <TypeEditForm
            closeConfirm={confirm.handleClose}
            oldFildName={oldFildName}
          />
        );
        break;

      case "manufacturer":
        component = (
          <ManufacturerEditForm
            closeConfirm={confirm.handleClose}
            oldFildName={oldFildName}
          />
        );
        break;
    }

    confirm.openConfirm({ oldFildName, select, component });

    // confirm({ title, oldFildName })
    //   .then((newName) => handleClickOk(oldFildName, select, newName))
    //   .catch(() => {});
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
  closeList: PropTypes.func.isRequired,
};
