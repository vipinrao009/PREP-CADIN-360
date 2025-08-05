import { configureStore } from "@reduxjs/toolkit"
import userReducer  from "../redux/slices/AuthSlice.js"

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})