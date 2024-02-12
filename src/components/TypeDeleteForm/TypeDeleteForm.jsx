import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// components
import { LoaderPretty } from "../LoaderPretty";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";
import { deleteDeviceTypeThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsDelete } from "../SettingsDelete";

export const TypeDeleteForm = ({ closeConfirm, oldFildName = "" }) => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const dispatch = useDispatch();

  const handleClikOk = () => {
    dispatch(
      deleteDeviceTypeThunk({
        type: oldFildName,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Тип техніки видалено");
        closeConfirm();
      })
      .catch((error) => {
        console.log(error);
        toast.warning(error);
      });
  };

  return (
    <>
      {isLoading && <LoaderPretty />}
      <SettingsDelete
        title="Видалити тип техніки"
        value={oldFildName}
        buttonName="Видалити"
        closeConfirm={closeConfirm}
        okConfirm={handleClikOk}
      />
    </>
  );
};

TypeDeleteForm.propTypes = {
  oldFildName: PropTypes.string,
  closeConfirm: PropTypes.func,
};
