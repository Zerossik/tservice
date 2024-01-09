import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDeviceManufacturer,
  addDeviceType,
  deleteDeviceManufacturer,
  deleteDeviceType,
  editDeviceManufacturer,
  editDeviceType,
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

export const editDeviceTypeThunk = createAsyncThunk(
  "settingsUser/editDeviceType",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await editDeviceType(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDeviceTypeThunk = createAsyncThunk(
  "settingsUser/deleteDeviceType",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await deleteDeviceType(body);
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

export const editDeviceManufacturerThunk = createAsyncThunk(
  "settingsUser/editDeviceManufacturer",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await editDeviceManufacturer(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDeviceManufacturerThunk = createAsyncThunk(
  "settingsUser/deleteDeviceManufacturer",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await deleteDeviceManufacturer(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
