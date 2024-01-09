import * as Yup from "yup";
import { getArrayMasters } from "../utils/getDataFromStore";

const message = "Виберіть зі списку";
const required = "Обов'язково";

export const AddMasterSchema = Yup.object().shape({
  firstName: Yup.string().required(required),
  lastName: Yup.string().required(required),
});

export const deleteMasterSchema = () => {
  const mastersList = getArrayMasters();

  return Yup.object().shape({
    id: Yup.string(),
    masterName: Yup.string().oneOf(mastersList, message).required(required),
  });
};
