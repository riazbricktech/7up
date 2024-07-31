import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../constant/Api_url';
import { getData } from '../../services/AxiosFunction';

export const getCities = createAsyncThunk(
  'cities/getCities',
  async (_, { rejectWithValue }) => {
    try {
      const responseData = await getData(`${api}get-cities`, 'GET');
        console.log("page 1 Call To an Action");
      return responseData;
    } catch (error) {
      console.log("page 1 Call To an Action Failed");
      if (!error.response) {
        return rejectWithValue({ message: 'Network Error' });
      }
      const { status, data } = error.response;
      return rejectWithValue({ status, message: data?.message || 'An error occurred' });
    }
  }
);
