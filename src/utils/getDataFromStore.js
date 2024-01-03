import { store } from "../redux/store";

export const getArrayDeviceType = () => {
  const deviceTypes = store.getState().settingsUser.deviceTypes;
  return deviceTypes.map((item) => item.deviceType);
};

export const getArrayDeviceManufacturers = () => {
  const manufacturers = store.getState().settingsUser.deviceManufacturers;
  return manufacturers.map((item) => item.manufacturer);
};

export const getArrayMasters = () => {
  const masters = store.getState().auth.user.masters;
  return masters.map((item) => `${item.lastName} ${item.firstName}`);
};
