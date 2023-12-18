import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../initialState";
import {
  changeThemeThunk,
  getCurrentUserThunk,
  loginThunk,
  logoutThink,
} from "./authThunks";

const handleLogin = (state, { payload }) => {
  state.token = payload.token;
  state.user.id = payload.data.id;
  state.user.name = payload.data.name;
  state.user.email = payload.data.email;
  state.user.isLogin = true;
};

const handleLogout = (state) => {
  state.token = "";
  state.user.id = "";
  state.user.name = "";
  state.user.email = "";
  state.user.isLogin = false;
};

const handleGetCurrent = ({ user }, { payload }) => {
  console.log(payload);
  user.id = payload.id;
  user.email = payload.email;
  user.name = payload.name;
  user.isLogin = true;
};

const handleChangeTheme = (state, { payload }) => {
  state.user.theme = payload.theme;
};

const handleFulfilled = (state) => {
  state.error = null;
  state.isLoading = false;
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: authInitialState,
  reducers: {
    deleteToken: (state) => {
      state.token = "";
    },
    setUser: (state, { payload }) => {
      state.user.id = payload.data.id;
      state.user.email = payload.data.email;
      state.user.name = payload.data.name;
      state.token = payload.token;
      state.user.isLogin = true;
      state.user.theme = payload.data.theme;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, handleLogin)
      .addCase(logoutThink.fulfilled, handleLogout)
      .addCase(getCurrentUserThunk.fulfilled, handleGetCurrent)
      .addCase(changeThemeThunk.fulfilled, handleChangeTheme)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      )
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const { deleteToken } = authSlice.actions;
export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
