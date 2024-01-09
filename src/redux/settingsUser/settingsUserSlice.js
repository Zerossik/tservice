import { createSlice } from "@reduxjs/toolkit";
import { settingsUserInitialState } from "../initialState";
import {
  addDeviceManufacturerThunk,
  addDeviceTypeThunk,
  deleteDeviceManufacturerThunk,
  deleteDeviceTypeThunk,
  editDeviceManufacturerThunk,
  editDeviceTypeThunk,
  getAllListThunk,
} from "./settingsUserThunks";

const handlegetAllList = (state, { payload }) => {
  state.deviceManufacturers = payload.deviceManufacturers;
  state.deviceTypes = payload.deviceTypes;
};

const handleAddDeviceType = (state, { payload }) => {
  state.deviceTypes.push(payload);
};

const handleEditDeviceType = (state, { payload }) => {
  console.log(payload);
  // state.deviceTypes.push(payload);
};

const handleDeleteDeviceType = (state, { payload }) => {
  console.log(payload);
  // state.deviceTypes.push(payload);
};

const handleAddDeviceManufacturer = (state, { payload }) => {
  state.deviceManufacturers.push(payload);
};

const handleEditDeviceManufacturer = (state, { payload }) => {
  console.log(payload);
  // state.deviceManufacturers.push(payload);
};

const handleDeleteDeviceManufacturer = (state, { payload }) => {
  console.log(payload);
  // state.deviceManufacturers.push(payload);
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

const settingsUserSlice = createSlice({
  name: "settingsUser",
  initialState: settingsUserInitialState,
  reducers: {
    getAllLists: (state, { payload }) => {
      state.deviceManufacturers = payload.deviceManufacturers;
      state.deviceTypes = payload.deviceTypes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllListThunk.fulfilled, handlegetAllList)
      .addCase(addDeviceTypeThunk.fulfilled, handleAddDeviceType)
      .addCase(editDeviceTypeThunk.fulfilled, handleEditDeviceType)
      .addCase(deleteDeviceTypeThunk.fulfilled, handleDeleteDeviceType)
      .addCase(
        addDeviceManufacturerThunk.fulfilled,
        handleAddDeviceManufacturer
      )
      .addCase(
        editDeviceManufacturerThunk.fulfilled,
        handleEditDeviceManufacturer
      )
      .addCase(
        deleteDeviceManufacturerThunk.fulfilled,
        handleDeleteDeviceManufacturer
      )

      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      )
      .addMatcher((action) => {
        if (
          action.type.includes("settingsUser") &&
          action.type.endsWith("/pending")
        ) {
          return true;
        }
      }, handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const { getAllLists } = settingsUserSlice.actions;
export const settingsUserReducer = settingsUserSlice.reducer;
