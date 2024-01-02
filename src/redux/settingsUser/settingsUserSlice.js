import { createSlice } from "@reduxjs/toolkit";
import { settingsUserInitialState } from "../initialState";
import {
  addDeviceOrManufacturerThunk,
  getAllListThunk,
} from "./settingsUserThunks";

const handlegetAllList = (state, { payload }) => {
  console.log(payload);
  state.deviceManufacturers = payload.deviceManufacturers;
  state.deviceTypes = payload.deviceTypes;
};

const handleAddDeviceOrManufacturer = (state, { payload }) => {
  state.deviceManufacturers = payload.deviceManufacturers;
  state.deviceTypes = payload.deviceTypes;
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
    // deleteToken: (state) => {
    //   state.token = "";
    // },
    // setUser: (state, { payload }) => {
    //   state.user = payload.data;
    //   state.token = payload.token;
    //   state.user.isLogin = true;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllListThunk.fulfilled, handlegetAllList)
      .addCase(
        addDeviceOrManufacturerThunk.fulfilled,
        handleAddDeviceOrManufacturer
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

export const settingsUserReducer = settingsUserSlice.reducer;
