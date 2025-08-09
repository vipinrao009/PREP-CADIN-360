import { configureStore } from "@reduxjs/toolkit"
import studentReducer from '../redux/slices/StudentSlice'

export const store = configureStore({
    reducer:{
        students:studentReducer
    }
})