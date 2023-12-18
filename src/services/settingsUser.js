import { apiPrivate } from "./baseAPI";

export const changeTheme = async (theme) => {
  try {
    const { data } = await apiPrivate.post("/api/user/changeTheme", { theme });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
