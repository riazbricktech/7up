import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../constant/Api_url";
import { postData } from "../../services/AxiosFunction";
import { setError } from "../slice/errorSlice";
import DOMPurify from "dompurify";
import he from "he";
export const transaction = createAsyncThunk(
  "transaction",
  async (data, { rejectWithValue }) => {
    try {
      const responseData = await postData(`${api}jc/tpi/payment`, data);
      console.log("page 3 Call To an Action Failed");
      const sanitizeData = (data) => {
        if (typeof data === "string") {
          const decodedData = he.decode(data);
          return DOMPurify.sanitize(decodedData);
        } else if (typeof data === "object" && data !== null) {
          const sanitizedObject = {};
          for (const key in data) {
            const value = data[key];
            if (typeof value === "string") {
              sanitizedObject[key] = DOMPurify.sanitize(he.decode(value));
            } else {
              sanitizedObject[key] = value;
            }
          }
          return sanitizedObject;
        }
        return data;
      };

      const sanitizedResponseData = sanitizeData(responseData);
      return sanitizedResponseData;
    } catch (error) {
      console.log("page 3 Call To an Action Failed");
      dispatch(setError({ message: "An error occurred" }));
      const sanitizeError = (message) => {
        const decodedMessage = he.decode(
          message ? message : "An error occurred"
        );
        return DOMPurify.sanitize(decodedMessage);
      };

      const errorMessage = error?.response
        ? sanitizeError(error.response.data?.message || "An error occurred")
        : sanitizeError("Network Error");

      return rejectWithValue({
        status: error.response?.status || "unknown",
        message: errorMessage,
      });
    }
  }
);
