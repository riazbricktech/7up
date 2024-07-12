import { createSlice } from "@reduxjs/toolkit";
import { postPrice } from "../actions/SpinAction";



const SpinSlice = createSlice({
    name: "Spin",
    initialState: {
        isLoading: false,
        spinData:null,
        // xyz:null,
        // so on ...
    },
    reducers:{
        // setContractTypeData: (state, action) => {
        //     state.xyz = action.payload;
        //   }
    },
    extraReducers:(builder)=> {

        builder.addCase(postPrice.pending,(state,action)=>{
            state.isLoading= true;
        });
        builder.addCase(postPrice.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.spinData = action.payload;
        });
        builder.addCase(postPrice.rejected,(state,action)=>{
            state.isLoading=false;
            state.spinData = action.payload;
        });
    }

})

// export const {setContractTypeData} = spinData.action;

export default SpinSlice.reducer;