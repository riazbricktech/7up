import { createSlice } from "@reduxjs/toolkit";

const JcNumberSlice = createSlice({
  name: "JcNumber",
  initialState: {
    isLoading: false,
    notJcNumber: "",
  },
  reducers: {
    jcNumFunction: (state, action) => {
      state.notJcNumber = action.payload;
    },
  },
});

export const { jcNumFunction } = JcNumberSlice.actions;

export default JcNumberSlice.reducer;
