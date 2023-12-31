import * as Yup from "yup";
import {
  getArrayDeviceType,
  getArrayDeviceManufacturers,
  getArrayMasters,
} from "../utils/getDataFromStore";

export const editOrderSchema = () => {
  const typeList = getArrayDeviceType();
  const manufacturerList = getArrayDeviceManufacturers();
  const mastersList = getArrayMasters();

  const message = "Виберіть зі списку";
  const required = "Обов'язково";

  return Yup.object({
    type: Yup.string().oneOf(typeList, message).required(required),
    manufacturer: Yup.string()
      .oneOf(manufacturerList, message)
      .required(required),
    model: Yup.string().required(required),
    deviceID: Yup.string(),
    customerName: Yup.string().required(required),
    phoneNumber: Yup.string().required(required),
    price: Yup.number().required(required),
    status: Yup.string().required(required),
    masterName: Yup.string().oneOf(mastersList, message).required(required),
    description: Yup.string(),
    failure: Yup.string().required(required),
  });
};
