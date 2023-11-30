import { store } from "../../redux/store";

export const isUserLogin = () => {
  return store.getState().auth.user.isLogin;
};

export const userToken = () => {
  return store.getState().auth.token;
};
