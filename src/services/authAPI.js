import axios from "axios";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const BASE_URL = "https://service-center-6fck.onrender.com";

export const apiPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const addAuthorizationHeader = async (config) => {
  let token = store.getState().auth.token;
  if (token) {
    if (config?.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
};

apiPrivate.interceptors.request.use(addAuthorizationHeader, (error) =>
  Promise.reject(error)
);

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
