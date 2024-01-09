import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import { Title, FormStyled } from "../AddMasterForm/AddMasterForm.styled";
// components
import { LoaderPretty } from "../LoaderPretty";
import { ButtonForm } from "../ButtonForm";
import { selectIsLoading, selectMasters } from "../../redux/auth/selectors";
import { Select } from "../Select";
import { createListOfMasters } from "../../utils";
import { deleteMasterSchema } from "../../validation";
import { deleteMasterThunk } from "../../redux/auth/authThunks";

export const DeleteMasterForm = () => {
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
      <Title>Видалити майстра</Title>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Select
          idFlag
          name="masterName"
          type="text"
          formik={formik}
          labelText="Ім'я майстра"
          fildsList={createListOfMasters(masters)}
        />

        <ButtonForm
          buttonName="Видалити"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </FormStyled>
    </>
  );
};
