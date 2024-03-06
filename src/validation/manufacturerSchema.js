import * as Yup from "yup";
import { VALIDMESS } from "../constants";

export const AddManufacturerSchema = Yup.object().shape({
  manufacturer: Yup.string().required(VALIDMESS.REQUIRED),
});

export const EditManufacturerSchema = Yup.object().shape({
  newManufacturer: Yup.string().required(VALIDMESS.REQUIRED),
});
