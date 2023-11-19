import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder.addCase("Thunk", () => {}),
});
