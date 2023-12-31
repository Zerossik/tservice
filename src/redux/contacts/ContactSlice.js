import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "../initialState";
import {
  addContactThunk,
  getAllThunk,
  deleteContactThunk,
  updateContactByIdThunk,
} from "./contactsThunks";

const handleGetAll = (state, { payload }) => {
  state.contacts = payload;
};

const handleAddContact = (state, { payload }) => {
  state.contacts.unshift(payload);
};

const handleUpdateContact = (state, { payload }) => {
  console.log(payload);
  const idx = state.contacts.indexOf(payload._id);
  state.contacts.splice(idx, 1, payload);
};

const handleDeleteContact = (state, { payload }) => {
  state.contacts = state.contacts.filter(({ _id: id }) => id !== payload._id);
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
  console.log(payload);
};

const contactSlice = createSlice({
  name: "contactSlice",
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllThunk.fulfilled, handleGetAll)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(updateContactByIdThunk.fulfilled, handleUpdateContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      )
      .addMatcher((action) => {
        if (
          action.type.includes("contacts") &&
          action.type.endsWith("/pending")
        ) {
          return true;
        }
      }, handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const contactReducer = contactSlice.reducer;
