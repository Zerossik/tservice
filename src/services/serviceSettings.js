import { apiPrivate } from "./baseAPI";

export const getAllSettings = async () => {
  try {
    const { data } = await apiPrivate.get("");
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
