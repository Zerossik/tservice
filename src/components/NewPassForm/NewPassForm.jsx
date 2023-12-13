import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import {
  Container,
  Title,
  FormStyled,
  FormButton,
  NavLinkStyled,
  Text,
} from "../Register/Register.styled";
// components
import { Input } from "../Input";
import { NewPassSchema } from "../../validation";
import { PATHS } from "../../constants";

export const NewPassForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    validationSchema: NewPassSchema,
    onSubmit: async (value) => {
      try {
        setLoading(true);
        // const {code} = await newPassword(value);

        // if (code === 201) {
        //   setLoading(false);
        //   toast.success(`Ваш пароль змінено`);
        //   formik.resetForm();
        //   navigate(`/${PATHS.LOGIN}`, { replace: true });
        // }
        console.log(value);
      } catch (error) {
        console.log("error ", error.message);
        toast.warning(`Щось пішло не так:) Спробуйте ще раз`);
        setLoading(false);
      }
    },
  });

  return (
    <Container>
      <Title>Змінити пароль</Title>
      <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
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
        <FormButton
          type="submit"
          disabled={!(formik.isValid && formik.dirty && !loading)}
          $loading={loading}
        >
          Змінити
        </FormButton>
      </FormStyled>

      <Text>
        <NavLinkStyled to={`${PATHS.BASE}`}>На головну</NavLinkStyled>
      </Text>
    </Container>
  );
};
