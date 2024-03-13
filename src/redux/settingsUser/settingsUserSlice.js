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
import { tableSettings } from "../../fakeData";

const handlegetAllList = (state, { payload }) => {
  state.deviceManufacturers = payload.deviceManufacturers;
  state.deviceTypes = payload.deviceTypes;

  if (payload.tableSettings.length === 0) {
    state.tableSettings = tableSettings;
    return;
  }

  state.tableSettings = payload.tableSettings;
};

const handleAddDeviceType = (state, { payload }) => {
  state.deviceTypes.push(payload);
};

const handleEditDeviceType = (state, { payload }) => {
  state.deviceTypes = state.deviceTypes.map((item) =>
    item._id === payload._id ? payload : item
  );
};

const handleDeleteDeviceType = (state, { payload }) => {
  state.deviceTypes = state.deviceTypes.filter(
    (item) => item._id !== payload._id
  );
};

const handleAddDeviceManufacturer = (state, { payload }) => {
  state.deviceManufacturers.push(payload);
};

const handleEditDeviceManufacturer = (state, { payload }) => {
  state.deviceManufacturers = state.deviceManufacturers.map((item) =>
    item._id === payload._id ? payload : item
  );
};

const handleDeleteDeviceManufacturer = (state, { payload }) => {
  state.deviceManufacturers = state.deviceManufacturers.filter(
    (item) => item._id !== payload._id
  );
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
      state.deviceManufacturers = payload.data.deviceManufacturers;
      state.deviceTypes = payload.data.deviceTypes;

      if (payload.data.tableSettings.length === 0) {
        state.tableSettings = tableSettings;
        return;
      }

      state.tableSettings = payload.data.tableSettings;
    },
    device: (state, { payload }) => {
      state.device = payload;
    },
    changeVisibleTableSettings: (state, { payload }) => {
      state.tableSettings = state.tableSettings.map((item) =>
        item.id === payload ? { ...item, isVisible: !item.isVisible } : item
      );
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

export const { getAllLists, device, changeVisibleTableSettings } =
  settingsUserSlice.actions;
export const settingsUserReducer = settingsUserSlice.reducer;
