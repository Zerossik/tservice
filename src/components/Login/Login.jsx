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
import { removLeadTrailWhitespace } from "../../utils";

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
      const trimValues = removLeadTrailWhitespace(values);

      const { email, password } = trimValues;

      if (email === "" || password === "") return;

      dispatch(loginThunk(trimValues))
        .unwrap()
        .then(() => {
          formik.resetForm();
          navigate(`/${PATHS.SERVICES}`, { replace: true });
        })
        .catch((err) => {
          if (err === "email address not confirmed") {
            navigate(`/${PATHS.VERIFYUSER}`);
            return;
          }

          toast.warning(`Email або password, не вірні`);
        });
    },
  });

  return (
    <>
      {isLoading && <LoaderPretty />}
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
