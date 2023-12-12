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
