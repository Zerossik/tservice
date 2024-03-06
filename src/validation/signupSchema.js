import * as Yup from "yup";
import { VALIDMESS } from "../constants";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Мінімум 2 символу")
    .max(50, "Максимум 50 символів")
    .matches(/^[\p{L}\p{M}\p{Zs}]{2,30}$/u, VALIDMESS.ONLYLETTERSNUMBERS)
    .required(VALIDMESS.REQUIRED),
  email: Yup.string().email(VALIDMESS.EMAIL).required(VALIDMESS.REQUIRED),
  password: Yup.string()
    .min(6, "Мінімум 6 символів")
    // .matches(/[0-9]/, "Password requires a number")
    // .matches(/[a-z]/, "Password requires a lowercase letter")
    // .matches(/[A-Z]/, "Password requires an uppercase letter")
    // .matches(/[^\w]/, "Password requires a symbol")
    .required(VALIDMESS.REQUIRED),
});
