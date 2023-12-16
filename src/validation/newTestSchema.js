import * as Yup from "yup";
import "yup-phone-lite";

export const NewTestSchema = Yup.object({
  type: Yup.string().required("Required"),
  manufacturer: Yup.string().required("Required"),
  model: Yup.string().required("Required"),
  deviceID: Yup.string(),
  customerName: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .phone("UA", "Please enter a valid phone number")
    .required("Required"),
  price: Yup.number().required("Required"),
  status: Yup.string().required("Required"),
  masterName: Yup.string(),
  description: Yup.string(),
  failure: Yup.string(),
});
