import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import { Title, FormStyled } from "../AddMasterForm/AddMasterForm.styled";
// components
import { ButtonForm } from "../ButtonForm";
import { selectIsLoading } from "../../redux/auth/selectors";
import { LoaderPretty } from "../LoaderPretty";
import { Select } from "../Select";
import { selectDeviceTypes } from "../../redux/settingsUser/selectors";
import { rewriteDeviceTypeArr } from "../../utils";
import { deleteTypeSchema } from "../../validation";
import { deleteDeviceTypeThunk } from "../../redux/settingsUser/settingsUserThunks";

export const TypeDeleteForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const deviceTypes = useSelector(selectDeviceTypes);
  const dispatch = useDispatch();

  const DeleteTypeSchema = useMemo(() => deleteTypeSchema(), []);

  const formik = useFormik({
    initialValues: {
      id: "",
      type: "",
    },
    validationSchema: DeleteTypeSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(deleteDeviceTypeThunk(values))
        .unwrap()
        .then(() => {
          toast.success("Тип техніки видалено");
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
      <Title>Видалити тип техніки</Title>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Select
          idFlag
          name="type"
          type="text"
          formik={formik}
          labelText="Виберіть тип техніки"
          fildsList={rewriteDeviceTypeArr(deviceTypes)}
        />

        <ButtonForm
          buttonName="Видалити"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </FormStyled>
    </>
  );
};
