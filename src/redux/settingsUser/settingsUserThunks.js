import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDeviceManufacturer,
  addDeviceType,
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

export const addDeviceTypeThunk = createAsyncThunk(
  "settingsUser/addDeviceType",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await addDeviceType(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDeviceManufacturerThunk = createAsyncThunk(
  "settingsUser/addDeviceManufacturer",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await addDeviceManufacturer(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
