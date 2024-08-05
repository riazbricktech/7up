import { createSlice } from "@reduxjs/toolkit";
import { transaction } from "../actions/TransactionAction";

const transactionSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    transactionData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(transaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(transaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactionData = action.payload;
      })
      .addCase(transaction.rejected, (state, action) => {
        state.isLoading = false;
        state.transactionData = action.payload;
      });
  },
});

export default transactionSlice.reducer;
