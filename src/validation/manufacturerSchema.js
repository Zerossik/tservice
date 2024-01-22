import * as Yup from "yup";

const required = "Обов'язково";

export const AddManufacturerSchema = Yup.object().shape({
  manufacturer: Yup.string().required(required),
});

export const EditManufacturerSchema = Yup.object().shape({
  newManufacturer: Yup.string().required(required),
});
