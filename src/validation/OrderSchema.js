import * as Yup from "yup";
import "yup-phone-lite";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const OrderSchema = Yup.object().shape({
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
