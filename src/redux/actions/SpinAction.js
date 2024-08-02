import { createAsyncThunk } from "@reduxjs/toolkit";
 import api from "../../constant/Api_url";
import { postData } from "../../services/AxiosFunction";
import { setError } from '../slice/errorSlice';

export const spinPrice = createAsyncThunk(
  "Spin",
  async (data , { rejectWithValue }) => {
    try {
      const responseData = await postData(`${api}start`, data);
      console.log("page 2 Call To an Action");
      return responseData;
    } catch (error) {
      dispatch(setError({ message: 'Network Error' }));
      
      // Check if it's a network error
      if (!error.response) {
        dispatch(setError({ status, message:  'An error occurred' }));

      console.log("page 2 Call To an Action Failed");

        return rejectWithValue({ message: "Network Error" });
      }
      // Extract and return more detailed error information
      const { status, data } = error.response;
      return rejectWithValue({ status, message: data?.message || "An error occurred" });
    }
  }
);
