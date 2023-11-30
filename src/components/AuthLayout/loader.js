import { getCurrentUser } from "../../services/authAPI";
import { isUserLogin, userToken } from "../AuthRequired/auth";

export const loader = async () => {
  const isAuth = isUserLogin();
  const token = userToken();

  if (!token || isAuth) {
    return null;
  }

  try {
    const data = await getCurrentUser();
    return data;
  } catch (error) {
    return null;
  }
};
