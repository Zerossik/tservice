import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// components
import { LoaderPretty } from "../LoaderPretty";
import { AddTypeSchema } from "../../validation";
import { Input } from "../Input";
import { addDeviceTypeThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";

export const TypeAddForm = ({ closeConfirm }) => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      type: "",
    },
    validationSchema: AddTypeSchema,
    onSubmit: async (values) => {
      dispatch(addDeviceTypeThunk(values))
        .unwrap()
        .then(() => {
          toast.success("Тип техніки доданий");
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
        title="Додати тип техніки"
        buttonName="Додати"
        closeConfirm={closeConfirm}
      >
        <Input name="type" type="text" formik={formik} />
      </SettingsForm>
    </>
  );
};

TypeAddForm.propTypes = {
  closeConfirm: PropTypes.func,
};
