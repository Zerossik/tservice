import * as Yup from "yup";

export const resetPassSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});
