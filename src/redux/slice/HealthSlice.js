
import { createSlice } from '@reduxjs/toolkit';
import { healthCheck } from '../actions/HealthAction';


const healthCheckSlice = createSlice({
  name: 'health',
  initialState: {
    isLoading: false,
    healthData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(healthCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(healthCheck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.healthData = action.payload;
      })
      .addCase(healthCheck.rejected, (state, action) => {
        state.isLoading = false;
        state.healthData = action.payload;
      });
  },
});

export default healthCheckSlice.reducer;
