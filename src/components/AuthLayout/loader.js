import { getCurrentUser } from "../../services/authAPI";
import { userToken } from "../AuthRequired/auth";

export const loader = async () => {
  // const isAuth = isUserLogin();
  const token = userToken();

  // if (!token || isAuth) {
  if (!token) {
    return null;
  }

  try {
    const data = await getCurrentUser();
    return data;
  } catch (error) {
    return null;
  }
};
