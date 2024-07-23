import { createAsyncThunk } from "@reduxjs/toolkit";
 import api from "../../constant/Api_url";
import { postData } from "../../services/AxiosFunction";

export const spinPrice = createAsyncThunk(
  "Spin",
  async (data , { rejectWithValue }) => {
    try {
      const responseData = await postData(`${api}start`, data);

      return responseData;
    } catch (error) {
      // Check if it's a network error
      if (!error.response) {
        return rejectWithValue({ message: "Network Error" });
      }
      // Extract and return more detailed error information
      const { status, data } = error.response;
      return rejectWithValue({ status, message: data?.message || "An error occurred" });
    }
  }
);
