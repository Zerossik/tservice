import * as Yup from "yup";

export const AddMaster = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
});
