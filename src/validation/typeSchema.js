import * as Yup from "yup";

const required = "Обов'язково";

export const AddTypeSchema = Yup.object().shape({
  type: Yup.string().required(required),
});

export const EditTypeSchema = Yup.object().shape({
  newType: Yup.string().required(required),
});
