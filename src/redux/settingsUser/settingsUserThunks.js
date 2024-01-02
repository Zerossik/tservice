import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDeviceOrManufacturer,
  getAllList,
} from "../../services/settingsUserAPI";

export const getAllListThunk = createAsyncThunk(
  "settingsUser/getAllList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllList();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDeviceOrManufacturerThunk = createAsyncThunk(
  "settingsUser/addDeviceOrManufacturer",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await addDeviceOrManufacturer(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
