import * as Yup from "yup";

export const NewTestSchema = Yup.object({
  type: Yup.string().required("Required"),
});
