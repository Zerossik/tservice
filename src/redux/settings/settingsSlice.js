import { createSlice } from "@reduxjs/toolkit";
import { settingsInitialState } from "../initialState";
import { addMasterThunk, getAllSettingsThunk } from "./settingsThunk";

const handleGetAllSettings = (state, { payload }) => {
  state.masters = payload.masters;
};

const handleAddMaster = (state, { payload }) => {
  state.masters.push(payload);
};

const handleFulfilled = (state) => {
  state.error = null;
  state.isLoading = false;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: settingsInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllSettingsThunk.fulfilled, handleGetAllSettings)
      .addCase(addMasterThunk.fulfilled, handleAddMaster)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      )
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const settingsReducer = settingsSlice.reducer;
