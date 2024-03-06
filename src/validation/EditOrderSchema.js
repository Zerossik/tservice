import * as Yup from "yup";
import {
  getArrayDeviceType,
  getArrayDeviceManufacturers,
} from "../utils/getDataFromStore";
import { getDataFromListOfStatus } from "../fakeData";
import { VALIDMESS } from "../constants";

export const editOrderSchema = () => {
  const typeList = getArrayDeviceType();
  const manufacturerList = getArrayDeviceManufacturers();
  const listOfStatus = getDataFromListOfStatus();

  return Yup.object({
    type: Yup.string()
      .oneOf(typeList, VALIDMESS.LIST)
      .required(VALIDMESS.REQUIRED),
    manufacturer: Yup.string()
      .oneOf(manufacturerList, VALIDMESS.LIST)
      .required(VALIDMESS.REQUIRED),
    model: Yup.string().required(VALIDMESS.REQUIRED),
    deviceID: Yup.string(),
    customerName: Yup.string().required(VALIDMESS.REQUIRED),
    phoneNumber: Yup.string().required(VALIDMESS.REQUIRED),
    price: Yup.number().required(VALIDMESS.REQUIRED),
    status: Yup.string()
      .oneOf(listOfStatus, VALIDMESS.LIST)
      .required(VALIDMESS.REQUIRED),
    masterName: Yup.string(),
    description: Yup.string(),
    // failure: Yup.string().required(VALIDMESS.REQUIRED),
  });
};
