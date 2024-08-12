import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../actions/CreateUserAction";

const createUserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    createUserData: null,
  },
  reducers: {
    clearUserFunction: (state, action) => {
      state.createUserData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createUserData = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.createUserData = action.payload;
      });
  },
});
export const { clearUserFunction } = createUserSlice.actions;
export default createUserSlice.reducer;
