import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// components
import { AuthForm } from "../AuthForm/AuthForm";
import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { NewPassSchema } from "../../validation";
import { PATHS } from "../../constants";
import { setNewPassword } from "../../services/authAPI";
import { Loader } from "../Loader";

export const NewPassForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const data = useLoaderData();

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    validationSchema: NewPassSchema,
    onSubmit: async (value) => {
      try {
        setLoading(true);
        const { code } = await setNewPassword({
          id: data.id,
          token: data.token,
          password: value.password,
        });

        if (code === 201) {
          setLoading(false);
          toast.success(`Ваш пароль змінено`);
          formik.resetForm();
          navigate(`/${PATHS.LOGIN}`, { replace: true });
        }
      } catch (error) {
        console.log("error ", error.message);
        setLoading(false);
        toast.warning(`Щось пішло не так:) Спробуйте ще раз`);
      }
    },
  });

  return (
    <>
      {loading && <Loader isLoading={loading} />}
      <AuthForm
        formik={formik}
        title="Змінити пароль"
        path={`${PATHS.BASE}`}
        textLink="На головну"
      >
        <Input
          name="password"
          type="password"
          formik={formik}
          labelText="Новий пароль"
          moveLabel
        />
        <Input
          name="repeatPassword"
          type="password"
          formik={formik}
          labelText="Новий пароль ще раз"
          moveLabel
        />

        <ButtonForm
          buttonName="Змінити"
          disabled={!(formik.isValid && formik.dirty && !loading)}
        />
      </AuthForm>
    </>
  );
};
