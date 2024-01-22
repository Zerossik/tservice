import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// components
import { LoaderPretty } from "../LoaderPretty";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";
import { deleteDeviceManufacturerThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsDelete } from "../SettingsDelete";

export const ManufacturerDeleteForm = ({ closeConfirm, oldFildName = "" }) => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const dispatch = useDispatch();

  const handleClikOk = () => {
    dispatch(
      deleteDeviceManufacturerThunk({
        manufacturer: oldFildName,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Виробника видалено");
        closeConfirm();
      })
      .catch(() => {
        toast.warning("Щось пішло не так, спробуйте ще раз");
      });
  };

  return (
    <>
      {isLoading && <LoaderPretty />}
      <SettingsDelete
        title="Видалити виробника"
        value={oldFildName}
        buttonName="Видалити"
        closeConfirm={closeConfirm}
        okConfirm={handleClikOk}
      />
    </>
  );
};

ManufacturerDeleteForm.propTypes = {
  oldFildName: PropTypes.string,
  closeConfirm: PropTypes.func,
};
