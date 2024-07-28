import { createSlice } from "@reduxjs/toolkit";

const TransactionCountSlice = createSlice({
    name: "QrCode",
    initialState: {
        isLoading: false,
        transCountNum: 1
    },
    reducers: {
        transactionCountFunction: (state, action) => {
            state.transCountNum = action.payload;
        }
    },
})

export const { transactionCountFunction } = TransactionCountSlice.actions;

export default TransactionCountSlice.reducer;
