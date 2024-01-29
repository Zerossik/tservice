import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllContacts,
  addcontact,
  deleteContactById,
  updateContactById,
  getContactsByType,
} from "../../services/contactsAPI";

export const getAllThunk = createAsyncThunk(
  "contacts/getAllContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllContacts();
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

export const getContactsByTypeThunk = createAsyncThunk(
  "contacts/getContactsByType",
  async (type, { rejectWithValue }) => {
    try {
      const { data } = await getContactsByType(type);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
