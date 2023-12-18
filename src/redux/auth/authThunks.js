import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, logout, signin } from "../../services/authAPI";
import { changeTheme } from "../../services/settingsUser";

export const loginThunk = createAsyncThunk(
  "TService/login",
  async (user, { rejectWithValue }) => {
    try {
      const data = await signin(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  "TService/getCurrentUser",
  async (_, { rejectWithValue }) => {
    // const state = getState();

    // if (!state.token) {
    //   return rejectWithValue("Unable to fetch user");
    // }

    try {
      const { data } = await getCurrentUser();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThink = createAsyncThunk(
  "TService/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeThemeThunk = createAsyncThunk(
  "TService/changeTheme",
  async (theme, { rejectWithValue }) => {
    try {
      const { data } = await changeTheme(theme);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
