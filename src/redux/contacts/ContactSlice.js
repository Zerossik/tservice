import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "../initialState";
import {
  addContactThunk,
  deleteContactThunk,
  updateContactByIdThunk,
  getAllOrdersThunk,
  getAllOrdersFromArchiveThunk,
} from "./contactsThunks";
import { STATUS } from "../../fakeData";

const handleGetAllOrders = (state, { payload }) => {
  state.contacts = payload.data;
  state.totalOrders = payload.totalOrders;
};

const handleAddContact = (state, { payload }) => {
  state.contacts.unshift(payload);
};

const handleUpdateContact = (state, { payload }) => {
  if (payload.status === STATUS.ISSUED) {
    state.contacts = state.contacts.filter((item) => item._id !== payload._id);
    return;
  }

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
    changeVisibleTableHead: (state, { payload }) => {
      state.tableHeader = state.tableHeader.map((item) =>
        item.id === payload ? { ...item, isVisible: !item.isVisible } : item
      );
    },
    isTableVisible: (state, { payload }) => {
      state.isTableVisible = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllOrdersThunk.fulfilled, handleGetAllOrders)
      .addCase(getAllOrdersFromArchiveThunk.fulfilled, handleGetAllOrders)
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

export const { getAllContacts, changeVisibleTableHead, isTableVisible } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;
