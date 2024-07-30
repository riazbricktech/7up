import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../constant/Api_url';
import { getData } from '../../services/AxiosFunction';

export const healthCheck = createAsyncThunk(
  'health',
  async (_, { rejectWithValue }) => {
    try {
      const responseData = await getData(`${api}health`);
      return responseData;
    } catch (error) {
      console.log('Error caught', error);
      if (!error.response) {
        return rejectWithValue({ message: 'Network Error' });
      }
      const { status, data } = error.response;
      return rejectWithValue({ status, message: data?.message || 'An error occurred' });
    }
  }
);
