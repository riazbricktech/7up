import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../constant/Api_url';
import { postData } from '../../services/AxiosFunction';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (data, { rejectWithValue }) => {
    console.log('Inside createAsyncThunk');
    try {
      console.log('Before API call', data);
      const responseData = await postData(`${api}create-user`,data);
      console.log('After API call', responseData);
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
