import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// components
import { LoaderPretty } from "../LoaderPretty";
import { selectIsLoading } from "../../redux/auth/selectors";
import { deleteMasterThunk } from "../../redux/auth/authThunks";
import { SettingsDelete } from "../SettingsDelete";

export const MasterDeleteForm = ({ id, closeConfirm, oldFildName = "" }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleClikOk = () => {
    dispatch(deleteMasterThunk({ id }))
      .unwrap()
      .then(() => {
        toast.success("Майстра видалено");
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
        title="Видалити майстра"
        value={oldFildName}
        buttonName="Видалити"
        closeConfirm={closeConfirm}
        okConfirm={handleClikOk}
      />
    </>
  );
};

MasterDeleteForm.propTypes = {
  oldFildName: PropTypes.string,
  closeConfirm: PropTypes.func,
  id: PropTypes.string,
};
