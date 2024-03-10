import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// style
import {
  FormStyled,
  InputPhoneWrapper,
  List,
  ListItemArea,
  ListItemLast,
} from "./OrderForm.styled";
// components
import { Label } from "../Label";
import { Input } from "../Input";
import { Select } from "../Select";
import { TextArea } from "../TextArea/TextArea";
import { ErrorInput } from "../ErrorInput";
import { ButtonForm } from "../ButtonForm";
import { selectIsContactsLoading } from "../../redux/contacts/selectors";
import {
  addContactThunk,
  getAllOrdersThunk,
} from "../../redux/contacts/contactsThunks";
import { LoaderPretty } from "../LoaderPretty";
import { makeOrderSchema } from "../../validation";
import {
  selectDeviceManufacturers,
  selectDeviceTypes,
} from "../../redux/settingsUser/selectors";
import { removLeadTrailWhitespace, rewriteDeviceTypeArr } from "../../utils";
import { ButtonAddList } from "../ButtonAddList/ButtonAddList";
import { addcontact } from "../../services/contactsAPI";

export const OrderForm = ({ closeModal, isFormEdit }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsContactsLoading);
  const deviceManufacturers = useSelector(selectDeviceManufacturers);
  const deviceTypes = useSelector(selectDeviceTypes);
  const location = useLocation();
  const theme = useTheme();

  const params = new URLSearchParams(location.search);
  const pageNumber = params.get("page");
  const bodyParams = Object.fromEntries([...params.entries()]);

  // console.log("location", Object.fromEntries([...params.entries()]));

  const formik = useFormik({
    initialValues: {
      type: "",
      manufacturer: "",
      model: "",
      deviceID: "",
      customerName: "",
      phoneNumber: "",
      description: "",
      // failure: "",
    },
    validationSchema: makeOrderSchema(),
    onSubmit: (values) => {
      const trimValues = removLeadTrailWhitespace(values);

      if (pageNumber > 1) {
        addcontact(trimValues)
          .then(({ data: { orderNumber } }) => {
            dispatch(getAllOrdersThunk(bodyParams));
            toast.success(
              `Замовлення #${orderNumber} додано. Доступно на початку таблиці`
            );
            formik.resetForm();
            isFormEdit(false);
            closeModal(false);
          })
          .catch(() => toast.warning("Щось пішло не так, спробуйте ще раз"));

        return;
      }

      dispatch(addContactThunk(trimValues))
        .unwrap()
        .then(({ orderNumber }) => {
          toast.success(`Замовлення #${orderNumber} додано`);
          formik.resetForm();
          isFormEdit(false);
          closeModal(false);
        })
        .catch(() => toast.warning("Щось пішло не так, спробуйте ще раз"));
    },
  });

  useEffect(() => {
    isFormEdit(formik.dirty);
  }, [formik.dirty, isFormEdit]);

  return (
    <>
      {isLoading && <LoaderPretty isLoading={isLoading} />}
      <FormStyled onSubmit={formik.handleSubmit}>
        <List>
          <li>
            <Select
              editable
              deletable
              name="type"
              type="text"
              formik={formik}
              labelText="Тип техніки"
              fildsList={rewriteDeviceTypeArr(deviceTypes)}
            />
          </li>
          <li>
            <Select
              editable
              deletable
              name="manufacturer"
              type="text"
              formik={formik}
              labelText="Виробник"
              fildsList={deviceManufacturers}
            />
          </li>
          <li>
            <Input
              name="model"
              type="text"
              formik={formik}
              labelText="Модель"
            />
          </li>
          <li>
            <Input
              name="deviceID"
              type="text"
              formik={formik}
              labelText="Серійний номер"
            />
          </li>
          <li>
            <Input
              name="customerName"
              type="text"
              formik={formik}
              labelText="Ім'я клієнта"
            />
          </li>
          <li>
            <InputPhoneWrapper>
              <Label htmlFor="phoneNumber" labelText="Номер телефона" />
              <PhoneInput
                country="ua"
                onlyCountries={["ua"]}
                value={formik.values.phoneNumber}
                onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
                inputProps={{ name: "phoneNumber", id: "phoneNumber" }}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  padding: "6px 12px 6px 50px",
                  outline: "none",
                  color: theme.color.primary,
                  borderRadius: theme.borderRadius.extraSmall,
                  border: `1px solid ${theme.color.border}`,
                  backgroundColor: theme.color.bgSecondary,
                }}
                buttonStyle={{
                  backgroundColor: theme.color.bgSecondary,
                  border: `1px solid ${theme.color.border}`,
                  borderTopLeftRadius: theme.borderRadius.extraSmall,
                  borderBottomLeftRadius: theme.borderRadius.extraSmall,
                }}
                dropdownStyle={{
                  border: `1px solid ${theme.color.border}`,
                  borderRadius: theme.borderRadius.extraSmall,
                  backgroundColor: theme.color.dropDownBg,
                  boxShadow: theme.color.shadow,
                }}
                searchStyle={{
                  backgroundColor: "green",
                }}
              />
              {formik.errors.phoneNumber ? (
                <ErrorInput text={formik.errors.phoneNumber} />
              ) : null}
            </InputPhoneWrapper>
          </li>
          <ListItemArea>
            <TextArea
              name="description"
              formik={formik}
              labelText="Опис несправності"
            />
          </ListItemArea>
          {/* <ListItemArea>
            <TextArea name="failure" formik={formik} labelText="Несправність" />
          </ListItemArea> */}
          <ListItemArea>
            <ButtonAddList />
          </ListItemArea>
          <ListItemLast>
            <ButtonForm
              buttonName="Додати"
              disabled={!(formik.isValid && formik.dirty)}
            />
          </ListItemLast>
        </List>
      </FormStyled>
    </>
  );
};

OrderForm.propTypes = {
  closeModal: PropTypes.func,
  isFormEdit: PropTypes.func,
};
