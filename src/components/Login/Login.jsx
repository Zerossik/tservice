import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PATHS } from "../../constants";
import { useFormik } from "formik";
import { SigninSchema } from "../../validation";
import { loginThunk } from "../../redux/auth/authThunks";
import { toast } from "react-toastify";
// styled
import {
  Container,
  Title,
  FormStyled,
  InputWrapper,
  Label,
  InputStyled,
  FormButton,
  NavLinkStyled,
  Text,
  Error,
} from "../Register/Register.styled";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Loader } from "../Loader";

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

        <FormStyled onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <Label htmlFor="email">Email Address</Label>
            <InputStyled
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Password</Label>
            <InputStyled
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <Error>{formik.errors.password}</Error>
            ) : null}
          </InputWrapper>

          <div>
            <NavLinkStyled to={`${PATHS.BASE}`}>Забули пароль?</NavLinkStyled>
          </div>

          <FormButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            $loading={isLoading}
          >
            Увійти
          </FormButton>
        </FormStyled>

        <Text>
          <span>Ти не маєш акаунта?</span>
          <NavLink to={`/${PATHS.REGISTER}`}>Зареєструватися</NavLink>
        </Text>
      </Container>
    </>
  );
};
