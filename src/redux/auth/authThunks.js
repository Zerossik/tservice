import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, logout, signin } from "../../services/authAPI";
import {
  addMaster,
  changeTheme,
  deleteMaster,
} from "../../services/settingsUserAPI.js";

export const loginThunk = createAsyncThunk(
  "auth/login",
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
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCurrentUser();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThink = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeThemeThunk = createAsyncThunk(
  "auth/changeTheme",
  async (theme, { rejectWithValue }) => {
    try {
      const { data } = await changeTheme(theme);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMasterThunk = createAsyncThunk(
  "auth/addMaster",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await addMaster(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteMasterThunk = createAsyncThunk(
  "auth/deleteMaster",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await deleteMaster(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
