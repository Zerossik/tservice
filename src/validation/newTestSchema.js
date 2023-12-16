import * as Yup from "yup";

export const NewTestSchema = Yup.object({
  type: Yup.string().required("Required"),
  manufacturer: Yup.string().required("Required"),
  model: Yup.string().required("Required"),
  deviceID: Yup.string(),
  customerName: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  status: Yup.string().required("Required"),
  masterName: Yup.string(),
  description: Yup.string(),
  failure: Yup.string(),
});
