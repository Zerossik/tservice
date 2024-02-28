import * as Yup from "yup";
import { VALIDMESS } from "../constants";

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email(VALIDMESS.EMAIL).required(VALIDMESS.REQUIRED),
  password: Yup.string().required(VALIDMESS.REQUIRED),
});
