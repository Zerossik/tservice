import * as Yup from "yup";
import { VALIDMESS } from "../constants";

export const ResetPassSchema = Yup.object().shape({
  email: Yup.string().email(VALIDMESS.EMAIL).required(VALIDMESS.REQUIRED),
});
