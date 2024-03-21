import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { PATHS } from "../../constants";
import { toast } from "react-toastify";
// components
import { SignupSchema } from "../../validation";
import { signup } from "../../services/authAPI";
import { AuthForm } from "../AuthForm/AuthForm";
import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { LoaderPretty } from "../LoaderPretty";
import { removLeadTrailWhitespace } from "../../utils";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const trimValues = removLeadTrailWhitespace(values);

      try {
        setLoading(true);

        const {
          code,
          data: { name },
        } = await signup(trimValues);

        if (code === 201) {
          setLoading(false);
          toast.success(`Ваш профіль, ${name}, успішно створено`);
          formik.resetForm();
          navigate(`/${PATHS.VERIFYUSER}`);
        }
      } catch (error) {
        toast.warning(error.message);
        setLoading(false);
      }
    },
  });

  return (
    <>
      {loading && <LoaderPretty />}
      <AuthForm
        formik={formik}
        title="Реєстрація"
        text="Ти маєш акаунт?"
        path={`/${PATHS.LOGIN}`}
        textLink="Увійти"
      >
        <Input
          name="name"
          type="text"
          formik={formik}
          labelText="Ім’я"
          moveLabel
        />

        <Input
          name="email"
          type="email"
          formik={formik}
          labelText="Email адреса"
          moveLabel
        />

        <Input
          name="password"
          type="password"
          formik={formik}
          labelText="Пароль"
          moveLabel
        />

        <ButtonForm
          buttonName="Зареєструватися"
          disabled={!(formik.isValid && formik.dirty && !loading)}
        />
      </AuthForm>
    </>
  );
};
