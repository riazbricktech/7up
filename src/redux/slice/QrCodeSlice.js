import { createSlice } from "@reduxjs/toolkit";

const QrCodeSlice = createSlice({
    name: "QrCode",
    initialState: {
        isLoading: false,
        qrCodeNumber: ""
    },
    reducers: {
        qrCodeFunction: (state, action) => {
            state.qrCodeNumber = action.payload;
        }
    },
})

export const { qrCodeFunction } = QrCodeSlice.actions;

export default QrCodeSlice.reducer;
