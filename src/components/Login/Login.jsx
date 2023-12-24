import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// components
import { SigninSchema } from "../../validation";
import { loginThunk } from "../../redux/auth/authThunks";
import { PATHS } from "../../constants";
import { selectIsLoading } from "../../redux/auth/selectors";
import { AuthForm } from "../AuthForm/AuthForm";
import { Input } from "../Input";
import { NavLinkForm } from "../NavLinkForm";
import { ButtonForm } from "../ButtonForm";
import { LoaderPretty } from "../LoaderPretty";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      if (email === "" || password === "") return;
      dispatch(loginThunk(values))
        .unwrap()
        .then(() => {
          formik.resetForm();
          navigate(`/${PATHS.SERVICES}`, { replace: true });
        })
        .catch(() => toast.warning(`Email або password, не вірні`));
    },
  });

  return (
    <>
      {isLoading && <LoaderPretty isLoading={isLoading} />}
      <AuthForm
        formik={formik}
        title="Авторизація"
        text="Ти не маєш акаунта?"
        path={`/${PATHS.REGISTER}`}
        textLink="Зареєструватися"
      >
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

        <div>
          <NavLinkForm path={`/${PATHS.RESET}`} textLink="Забули пароль?" />
        </div>

        <ButtonForm buttonName="Увійти" disabled={isLoading} />
      </AuthForm>
    </>
  );
};
