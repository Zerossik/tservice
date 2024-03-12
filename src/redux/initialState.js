import { listOfStatus } from "../fakeData";

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
  totalOrders: 0,
  isTableVisible: true,
};

export const settingsUserInitialState = {
  device: "",
  error: null,
  isLoading: false,
  deviceManufacturers: [],
  deviceTypes: [],
  tableSettings: [],
  statuses: listOfStatus,
};
