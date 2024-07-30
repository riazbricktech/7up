import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../constant/Api_url';
import { postData } from '../../services/AxiosFunction';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (data, { rejectWithValue }) => {
    try {
      const responseData = await postData(`${api}create-user`,data);
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
