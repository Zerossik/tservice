import * as Yup from "yup";
import { getArrayMasters } from "../utils/getDataFromStore";
import { VALIDMESS } from "../constants";

export const AddMasterSchema = Yup.object().shape({
  firstName: Yup.string().required(VALIDMESS.REQUIRED),
  lastName: Yup.string().required(VALIDMESS.REQUIRED),
});

export const deleteMasterSchema = () => {
  const mastersList = getArrayMasters();

  return Yup.object().shape({
    id: Yup.string(),
    masterName: Yup.string()
      .oneOf(mastersList, VALIDMESS.LIST)
      .required(VALIDMESS.REQUIRED),
  });
};
