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





// import { createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../../constant/Api_url';
// import { postData } from '../../services/AxiosFunction';
// import { setError } from '../slice/errorSlice';
// import DOMPurify from 'dompurify'; // Import DOMPurify
// import he from 'he'; // Import the he library for decoding HTML entities

// export const createUser = createAsyncThunk(
//   'user/createUser',
//   async (data, { dispatch, rejectWithValue }) => {
//     try {
//       const responseData = await postData(`${api}create-user`, data);
//       console.log(responseData, "responseData");

//       // Sanitize response data
//       const sanitizeData = (dataa) => {
//         if (typeof dataa === 'string') {
//           console.log(dataa,"data");
//           // Decode HTML entities and then sanitize
//           const decodedData = he.decode(dataa);
//           return DOMPurify.sanitize(decodedData);
//         }
//         if (typeof dataa === 'object') {
//           return JSON.parse(
//             JSON.stringify(dataa, (key, value) =>
//               {console.log(value,"value");
//               typeof value === 'string' ? DOMPurify.sanitize(he.decode(value)) : value}
//             )
//           );
//         }
//         return data;
//       };

//       const sanitizedResponseData = sanitizeData(responseData);

//       console.log(sanitizedResponseData, "sanitizedResponseData");
//       console.log("page 1-1 Call To an Action");
//       return sanitizedResponseData;
//     } catch (error) {
//       // Sanitize error messages
//       const sanitizeError = (message) => DOMPurify.sanitize(he.decode(message));

//       if (!error.response) {
//         dispatch(setError({ status: 'unknown', message: sanitizeError('An error occurred') }));
//         return rejectWithValue({ message: sanitizeError('Network Error') });
//       }

//       const { status, data } = error.response;
//       const errorMessage = sanitizeError(data?.message || 'An error occurred');
//       dispatch(setError({ status, message: errorMessage }));

//       return rejectWithValue({ status, message: errorMessage });
//     }
//   }
// );

