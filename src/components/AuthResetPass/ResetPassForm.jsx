import { useState } from "react";
// import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
// import { Wrapper, StyledForm } from "./RessPassForm.styled";
import {
  Container,
  Title,
  FormStyled,
  FormButton,
  NavLinkStyled,
  Text,
} from "../Register/Register.styled";
// components
import { resetPassword } from "../../services/authAPI";
import { resetPassSchema } from "../../validation";
import { Input } from "../Input";
import { PATHS } from "../../constants";
// import { FormButton } from "../Register/Register.styled";
// import { FormButton, InputStyled, Label } from "../Register/Register.styled";

export const ResetPassForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetPassSchema,
    onSubmit: async (value) => {
      try {
        setLoading(true);
        const { code } = await resetPassword(value);

        if (code === 201) {
          setLoading(false);
          toast.success(`Вам надіслано листа, перевірте пошту, будь ласка`);
          formik.resetForm();
          // navigate(`/${PATHS.LOGIN}`);
        }

        setLoading(false);
      } catch (error) {
        console.log("error ", error.message);
        toast.warning(`Такого Emaila немає`);
        setLoading(false);
      }
      console.log("ResetPassForm ", value);
      setLoading(false);
    },
  });

  // const handlerRstPass = (event) => {
  //   event.preventDefault();
  //   const { value } = event.target.email;

  //   if (value.trim()) {
  //     ressPassword(value)
  //       .then(() => console.log("email sended"))
  //       .catch((error) => console.log(error.message));
  //   }

  //   return;
  // };
  return (
    <Container>
      <Title>Відновлення паролю</Title>
      <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
        {/* <StyledWp> */}
        {/* <legend>Скидання Паролю</legend> */}
        {/* <Label htmlFor="ress_pass">Email</Label> */}
        <Input
          name="email"
          type="email"
          formik={formik}
          labelText="Email адреса"
          moveLabel
        />
        {/* <InputStyled
          type="email"
          name="email"
          id="ress_pass"
          placeholder="Email"
        /> */}
        <FormButton
          type="submit"
          disabled={!(formik.isValid && formik.dirty && !loading)}
          $loading={loading}
        >
          Відправити
        </FormButton>
        {/* </StyledWp> */}
      </FormStyled>

      <Text>
        <NavLinkStyled to={`${PATHS.BASE}`}>На головну</NavLinkStyled>
      </Text>
    </Container>
  );
};
