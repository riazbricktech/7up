import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../constant/Api_url';
import { postData } from '../../services/AxiosFunction';

export const transaction = createAsyncThunk(
  'transaction',
  async (data, { rejectWithValue }) => {
    try {
      const responseData = await postData(`${api}jc/tpi/v1/payment`,data);
      console.log('Tranaction APi', responseData);
      return responseData;
    } catch (error) {
      console.log('Error caught transaction', error);
      if (!error.response) {
        return rejectWithValue({ message: 'Network Error' });
      }
      const { status, data } = error.response;
      return rejectWithValue({ status, message: data?.message || 'An error occurred' });
    }
  }
);
