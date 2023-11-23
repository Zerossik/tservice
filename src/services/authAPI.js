import axios from "axios";

axios.defaults.baseURL = "https://service-center-6fck.onrender.com";

export const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  removeToken() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signup = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/signup", user);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signin = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/signin", user);

    if (data.token) token.setToken(data.token);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axios.get("/api/auth/current");

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await axios.post("/api/auth/logout");

    token.removeToken();
  } catch (error) {
    throw new Error(error.message);
  }
};
