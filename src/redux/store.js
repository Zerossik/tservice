import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "TService",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
