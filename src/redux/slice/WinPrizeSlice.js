import { createSlice } from "@reduxjs/toolkit";

const WinPrizeDetail = createSlice({
    name: "Spin",
    initialState: {
        isLoading: false,
        mealPrizeName:null
    },
    reducers: {

        prizeName: (state, action) => {
            state.mealPrizeName = action.payload;
        }
    },
})

export const { prizeName } = WinPrizeDetail.actions;

export default WinPrizeDetail.reducer;
