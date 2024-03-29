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
    throw new Error(error.response.data.message);
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

export const resetPassword = async (body) => {
  try {
    const { data } = await apiPublic.post("/api/auth/resetpassword", body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verifyTokenLink = async (body) => {
  try {
    const { data } = await apiPublic.post(
      "/api/auth/resetpassword/verify",
      body
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const setNewPassword = async (body) => {
  const { id, token, password } = body;

  try {
    const { data } = await apiPublic.post(`/api/auth/resetpassword/${token}`, {
      id,
      password,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verifyEmailToken = async (verifyToken) => {
  try {
    const { data } = await apiPublic.get(`/api/auth/verify/${verifyToken}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const sendEmail = async (body) => {
  try {
    const { data } = await apiPublic.post("/api/auth/resendEmail", body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
