import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../constant/Api_url";
import { postData } from "../../services/AxiosFunction";

export const sfmcCreateUser = createAsyncThunk(
  "sfmcCreateUser",
  async (data, { rejectWithValue }) => {
    try {
        const responseData = await postData(`${api}sfmc/update`,data);
        console.log("page 5 Call To an Action");
        return responseData;


      }  catch (error) {
     return console.log("page 5 Call To an failed");
    //   return rejectWithValue({
    //     status: error.response?.status || "unknown",
    //     message: errorMessage,
    //   });
    }
  }
);
