// import { createSlice } from "@reduxjs/toolkit";
// import { getCities } from "../actions/CityAction";



// const CitySlice = createSlice({
//     name: "getCities",
//     initialState: {
//         isLoading: false,
//         citesData:null,
//         // xyz:null,
//         // so on ...
//     },
//     reducers:{
//         // setContractTypeData: (state, action) => {
//         //     state.xyz = action.payload;
//         //   }
//     },
//     extraReducers:(builder)=> {

//         builder.addCase(getCities.pending,(state,action)=>{
//             state.isLoading= true;
//         });
//         builder.addCase(getCities.fulfilled,(state,action)=>{
//             state.isLoading= false;
//             state.citesData = action.payload;
//         });
//         builder.addCase(getCities.rejected,(state,action)=>{
//             state.isLoading=false;
//             state.citesData = action.payload;
//         });
//     }

// })

// // export const {setContractTypeData} = spinData.action;

// export default CitySlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import { getCities } from '../actions/CityAction';

const CitySlice = createSlice({
  name: 'cities',
  initialState: {
    isLoading: false,
    citesData: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.citesData = action.payload;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.isLoading = false;
        // state.citesData = action.payload;
        state.citesData = undefined;
      });
  },
});

export default CitySlice.reducer;
