import { getAllContacts } from "../../services/contactsAPI";

export const loader = async () => {
  try {
    const { data } = await getAllContacts();
    return data;
  } catch (error) {
    console.log(error);
  }
};
