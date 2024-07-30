

import { createSlice } from '@reduxjs/toolkit';
import { getCities } from '../actions/CityAction';

const CitySlice = createSlice({
  name: 'cities',
  initialState: {
    isLoading: false,
    citesData: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.citesData = action.payload;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.isLoading = false;
        // state.citesData = action.payload;
        state.citesData = undefined;
      });
  },
});

export default CitySlice.reducer;
