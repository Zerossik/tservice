import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllContacts,
  addcontact,
  deleteContactById,
} from "../../services/contactsAPI";

export const getAllThunk = createAsyncThunk(
  "TService/getAllContacts",
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
  "TService/addContact",
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

export const deleteContactThunk = createAsyncThunk(
  "TService/deleteContact",
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
