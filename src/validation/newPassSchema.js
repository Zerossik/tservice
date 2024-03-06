import * as Yup from "yup";
import { VALIDMESS } from "../constants";

export const NewPassSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Мінімум 6 символів")
    // .matches(/[0-9]/, "Password requires a number")
    // .matches(/[a-z]/, "Password requires a lowercase letter")
    // .matches(/[A-Z]/, "Password requires an uppercase letter")
    // .matches(/[^\w]/, "Password requires a symbol")
    .required(VALIDMESS.REQUIRED),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], VALIDMESS.MATCHPASSWORDS)
    .required(VALIDMESS.REQUIRED),
});
