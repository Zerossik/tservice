import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "../initialState";
import {
  addContactThunk,
  deleteContactThunk,
  updateContactByIdThunk,
  getAllOrdersThunk,
} from "./contactsThunks";

const handleGetAllOrders = (state, { payload }) => {
  state.contacts = payload.data;
  state.totalOrders = payload.totalOrders;
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
      state.contacts = payload.data;
      state.totalOrders = payload.totalOrders;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllOrdersThunk.fulfilled, handleGetAllOrders)
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

export const { getAllContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
