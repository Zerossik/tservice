import { tableHeader, listOfStatus } from "../fakeData";

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
  isLoading: false,
  contacts: [],
  tableHeader: tableHeader,
};

export const settingsUserInitialState = {
  device: "",
  error: null,
  isLoading: false,
  deviceManufacturers: [],
  deviceTypes: [],
  statuses: listOfStatus,
};
