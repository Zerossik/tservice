import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
// components
import { LoaderPretty } from "../LoaderPretty";
import { ButtonForm } from "../ButtonForm";
import { selectIsLoading, selectMasters } from "../../redux/auth/selectors";
import { Select } from "../Select";
import { createListOfMasters } from "../../utils";
import { deleteMasterSchema } from "../../validation";
import { deleteMasterThunk } from "../../redux/auth/authThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";

export const MasterDeleteForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const masters = useSelector(selectMasters);
  const dispatch = useDispatch();

  const DeleteMasterSchema = useMemo(() => deleteMasterSchema(), []);

  const formik = useFormik({
    initialValues: {
      id: "",
      masterName: "",
    },
    validationSchema: DeleteMasterSchema,
    onSubmit: async (values) => {
      dispatch(deleteMasterThunk({ id: values.id }))
        .unwrap()
        .then(() => {
          toast.success("Майстра видалено");
          formik.resetForm();
        })
        .catch(() => {
          toast.warning("Щось пішло не так, спробуйте ще раз");
        });
    },
  });

  return (
    <>
      {isLoading && <LoaderPretty />}
      <SettingsForm formik={formik} legendTitle="Видалити майстра">
        <Select
          idFlag
          name="masterName"
          type="text"
          formik={formik}
          // labelText="Виберіть майстра"
          // styleLabel={{ fontWeight: 600 }}
          fildsList={createListOfMasters(masters)}
          list="top"
        />

        <ButtonForm
          buttonName="Видалити"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </SettingsForm>
    </>
  );
};
