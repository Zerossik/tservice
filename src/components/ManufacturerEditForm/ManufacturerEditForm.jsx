import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// style
// components
import { LoaderPretty } from "../LoaderPretty";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";
import { Input } from "../Input";
import { EditManufacturerSchema } from "../../validation";
import { editDeviceManufacturerThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";

export const ManufacturerEditForm = ({ closeConfirm, oldFildName = "" }) => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      newManufacturer: oldFildName,
    },
    validationSchema: EditManufacturerSchema,
    onSubmit: async ({ newManufacturer }) => {
      dispatch(
        editDeviceManufacturerThunk({
          oldManufacturer: oldFildName,
          newManufacturer,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Виробника змінено");
          formik.resetForm();
          closeConfirm();
        })
        .catch(() => {
          toast.warning("Щось пішло не так, спробуйте ще раз");
        });
    },
  });

  return (
    <>
      {isLoading && <LoaderPretty />}
      <SettingsForm
        formik={formik}
        isLoading={isLoading}
        title="Редагування виробника"
        buttonName="Редагувати"
        closeConfirm={closeConfirm}
      >
        <Input name="newManufacturer" type="text" formik={formik} />
      </SettingsForm>
    </>
  );
};

ManufacturerEditForm.propTypes = {
  oldFildName: PropTypes.string,
  closeConfirm: PropTypes.func,
};
