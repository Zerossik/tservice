import * as Yup from "yup";
import { getArrayDeviceType } from "../utils";

const message = "Виберіть зі списку";
const required = "Обов'язково";

export const AddTypeSchema = Yup.object().shape({
  type: Yup.string().required(required),
});

export const editTypeSchema = () => {
  const deviceType = getArrayDeviceType();

  return Yup.object().shape({
    id: Yup.string(),
    type: Yup.string().oneOf(deviceType, message).required(required),
    newType: Yup.string().required(required),
  });
};

export const deleteTypeSchema = () => {
  const deviceType = getArrayDeviceType();

  return Yup.object().shape({
    id: Yup.string(),
    type: Yup.string().oneOf(deviceType, message).required(required),
  });
};
