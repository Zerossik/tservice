import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { loginThunk, logoutThink } from "./authThunks";

const handleLogin = ({ user }, { payload }) => {
  user.token = payload.token;
  user.name = payload.data.name;
  user.email = payload.data.email;
  user.isLogin = true;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
};
const handlePending = (state, { payload }) => {
  state.isLoading = true;
};
const handleRejected = () => {};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, handleLogin)
      .addCase(logoutThink.fulfilled, ({ user }) => {
        user.token = "";
        user.name = "";
        user.email = "";
        user.isLogin = false;
      })
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

export const authReducer = authSlice.reducer;
