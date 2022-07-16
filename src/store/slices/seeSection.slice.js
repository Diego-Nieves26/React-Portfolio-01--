import { createSlice } from "@reduxjs/toolkit";

export const seeSectionSlice = createSlice({
  name: "activeCard",
  initialState: "AbautMe",
  reducers: {
    setSeeSection: (state, action) => action.payload,
  },
});

export const { setSeeSection } = seeSectionSlice.actions;

export default seeSectionSlice.reducer;
