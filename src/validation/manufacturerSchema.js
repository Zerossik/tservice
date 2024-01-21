import * as Yup from "yup";
import { getArrayDeviceManufacturers } from "../utils";

const message = "Виберіть зі списку";
const required = "Обов'язково";

export const AddManufacturerSchema = Yup.object().shape({
  manufacturer: Yup.string().required(required),
});

export const EditManufacturerSchema = Yup.object().shape({
  newManufacturer: Yup.string().required(required),
});

export const deleteManufacturerSchema = () => {
  const deviceManufacturers = getArrayDeviceManufacturers();

  return Yup.object().shape({
    id: Yup.string(),
    manufacturer: Yup.string()
      .oneOf(deviceManufacturers, message)
      .required(required),
  });
};
