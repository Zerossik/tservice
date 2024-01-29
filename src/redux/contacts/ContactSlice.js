import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "../initialState";
import {
  addContactThunk,
  getAllThunk,
  deleteContactThunk,
  updateContactByIdThunk,
  getContactsByTypeThunk,
} from "./contactsThunks";

const handleGetAll = (state, { payload }) => {
  state.contacts = payload;
};

const handleAddContact = (state, { payload }) => {
  state.contacts.unshift(payload);
};

const handleUpdateContact = (state, { payload }) => {
  state.contacts = state.contacts.map((item) =>
    item._id === payload._id ? payload : item
  );
};

const handleDeleteContact = (state, { payload }) => {
  state.contacts = state.contacts.filter(({ _id: id }) => id !== payload._id);
};

const handleGetContactsByType = (state, { payload }) => {
  state.contacts = payload;
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

const contactSlice = createSlice({
  name: "contactSlice",
  initialState: contactsInitialState,
  reducers: {
    getAllContacts: (state, { payload }) => {
      state.contacts = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllThunk.fulfilled, handleGetAll)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(updateContactByIdThunk.fulfilled, handleUpdateContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addCase(getContactsByTypeThunk.fulfilled, handleGetContactsByType)
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

export const { getAllContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
