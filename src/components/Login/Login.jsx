import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PATHS } from "../../constants";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// styled
import {
  Container,
  Title,
  FormStyled,
  FormButton,
  NavLinkStyled,
  Text,
} from "../Register/Register.styled";
// components
import { SigninSchema } from "../../validation";
import { loginThunk } from "../../redux/auth/authThunks";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Loader } from "../Loader";
import { Input } from "../Input";

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
      {isLoading && <Loader isLoading={isLoading} />}
      <Container>
        <Title>Авторизація</Title>

        <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
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
            <NavLinkStyled to={`/${PATHS.RESET}`}>Забули пароль?</NavLinkStyled>
          </div>

          <FormButton type="submit" disabled={isLoading} $loading={isLoading}>
            Увійти
          </FormButton>
        </FormStyled>

        <Text>
          <span>Ти не маєш акаунта?</span>
          <NavLinkStyled to={`/${PATHS.REGISTER}`}>
            Зареєструватися
          </NavLinkStyled>
        </Text>
      </Container>
    </>
  );
};
