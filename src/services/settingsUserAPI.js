import { apiPrivate } from "./baseAPI";

export const changeTheme = async (theme) => {
  try {
    const { data } = await apiPrivate.post("/api/user/changeTheme", { theme });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addMaster = async (body) => {
  try {
    const { data } = await apiPrivate.post("/api/user/addMaster", body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteMaster = async (body) => {
  try {
    const { data } = await apiPrivate.post("/api/user/deleteMaster", body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
