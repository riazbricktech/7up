import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../constant/Api_url';
import { postData } from '../../services/AxiosFunction';
import { setError } from '../slice/errorSlice';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (data, {dispatch, rejectWithValue }) => {
    try {
      const responseData = await postData(`${api}create-user`,data);
      console.log("page 1-1 Call To an Action");
      return responseData;
    } catch (error) {
      dispatch(setError({ message: 'Network Error' }));
      console.log("page 1-1 Call To an Action Failed");
      if (!error.response) {
      dispatch(setError({ status, message:  'An error occurred' }));
        return rejectWithValue({ message: 'Network Error' });
      }
      const { status, data } = error.response;
      return rejectWithValue({ status, message: data?.message || 'An error occurred' });
    }
  }
);
