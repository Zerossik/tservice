import { tableHeader } from "../fakeData";

export const authInitialState = {
  error: null,
  user: {
    id: "",
    name: "",
    email: "",
    isLogin: false,
    theme: "light",
    masters: [],
  },
  isLoading: false,
  token: "",
};

export const contactsInitialState = {
  error: null,
  contacts: [],
  tableHeader: tableHeader,
  isLoading: false,
};
