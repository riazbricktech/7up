import { configureStore } from "@reduxjs/toolkit";
import SpinSlice from "../slice/SpinSlice";
const store = configureStore({
reducer:{

    spin : SpinSlice
}
})

export default store; 