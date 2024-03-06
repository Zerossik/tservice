import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// style
// components
import { Input } from "../Input";
import { LoaderPretty } from "../LoaderPretty";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";
import { EditTypeSchema } from "../../validation";
import { editDeviceTypeThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";
import { removLeadTrailWhitespace } from "../../utils";

export const TypeEditForm = ({ closeConfirm, oldFildName = "" }) => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      newType: oldFildName,
    },
    validationSchema: EditTypeSchema,
    onSubmit: async (value) => {
      const { newType } = removLeadTrailWhitespace(value);

      dispatch(editDeviceTypeThunk({ oldType: oldFildName, newType }))
        .unwrap()
        .then(() => {
          toast.success("Тип техніки змінено");
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
        title="Редагування типу техніки"
        buttonName="Редагувати"
        closeConfirm={closeConfirm}
      >
        <Input name="newType" type="text" formik={formik} />
      </SettingsForm>
    </>
  );
};

TypeEditForm.propTypes = {
  oldFildName: PropTypes.string,
  closeConfirm: PropTypes.func,
};
