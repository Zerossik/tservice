import { getAllContacts } from "../../services/contactsAPI";
import { getAllList } from "../../services/settingsUserAPI";

export const loader = async () => {
  return Promise.all([getAllContacts(), getAllList()])
    .then((value) => {
      return value;
    })
    .catch((error) => {
      console.log(error);
    });
};
