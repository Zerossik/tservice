import { createAsyncThunk } from "@reduxjs/toolkit";
import { signin, logout } from "../../services/authAPI";

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
