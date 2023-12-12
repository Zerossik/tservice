import { apiPublic, apiPrivate } from "./baseAPI";

export const signup = async (user) => {
  try {
    const { data } = await apiPublic.post("/api/auth/signup", user);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signin = async (user) => {
  try {
    const { data } = await apiPublic.post("/api/auth/signin", user);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await apiPrivate.get("/api/auth/current");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await apiPrivate.post("/api/auth/logout");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const RessPassword = async (body) => {
  try {
    await apiPublic.post("/api/auth/resetpassword", {
      email: body,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
