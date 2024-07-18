
import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../actions/CreateUserAction';

const createUserSlice = createSlice({
  name: 'cities',
  initialState: {
    isLoading: false,
    createUserData: null,
  },
  reducers: {},
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

export default createUserSlice.reducer;
