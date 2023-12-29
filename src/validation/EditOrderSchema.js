import * as Yup from "yup";

export const EditOrderSchema = Yup.object({
  type: Yup.string().required("Required"),
  manufacturer: Yup.string().required("Required"),
  model: Yup.string().required("Required"),
  deviceID: Yup.string(),
  customerName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  status: Yup.string().required("Required"),
  masterName: Yup.string().required("Required"),
  description: Yup.string(),
  failure: Yup.string().required("Required"),
});
