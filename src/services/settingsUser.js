import { apiPrivate } from "./baseAPI";

export const changeTheme = async (theme) => {
  try {
    await apiPrivate.post("/api/user/changeTheme", { theme });
  } catch (error) {
    throw new Error(error.message);
  }
};
