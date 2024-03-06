import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// components
import { LoaderPretty } from "../LoaderPretty";
import { Input } from "../Input";
import { AddManufacturerSchema } from "../../validation";
import { addDeviceManufacturerThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";
import { removLeadTrailWhitespace } from "../../utils";

export const ManufacturerAddForm = ({ closeConfirm }) => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      manufacturer: "",
    },
    validationSchema: AddManufacturerSchema,
    onSubmit: async (values) => {
      const trimValues = removLeadTrailWhitespace(values);

      dispatch(addDeviceManufacturerThunk(trimValues))
        .unwrap()
        .then(() => {
          toast.success("Виробник доданий");
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
        title="Додати виробника"
        buttonName="Додати"
        closeConfirm={closeConfirm}
      >
        <Input name="manufacturer" type="text" formik={formik} />
      </SettingsForm>
    </>
  );
};

ManufacturerAddForm.propTypes = {
  closeConfirm: PropTypes.func,
};
