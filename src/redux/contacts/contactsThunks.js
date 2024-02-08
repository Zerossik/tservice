import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addcontact,
  deleteContactById,
  updateContactById,
  getAllOrders,
} from "../../services/contactsAPI";

export const getAllOrdersThunk = createAsyncThunk(
  "contacts/getAllOrders",
  async (params, { rejectWithValue }) => {
    try {
      const data = await getAllOrders(params);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await addcontact(body);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const updateContactByIdThunk = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const { data } = await updateContactById(id, body);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await deleteContactById(id);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
