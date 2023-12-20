import { createAsyncThunk } from "@reduxjs/toolkit";
import { addMaster, getAllSettings } from "../../services/serviceSettings";

export const getAllSettingsThunk = createAsyncThunk(
  "TService/getAllSettings",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllSettings();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMasterThunk = createAsyncThunk(
  "TService/addMaster",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await addMaster(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
