import * as Yup from "yup";
import { VALIDMESS } from "../constants";

export const AddTypeSchema = Yup.object().shape({
  type: Yup.string().required(VALIDMESS.REQUIRED),
});

export const EditTypeSchema = Yup.object().shape({
  newType: Yup.string().required(VALIDMESS.REQUIRED),
});
