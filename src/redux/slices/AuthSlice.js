import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  data:
    localStorage.getItem("data") != undefined
    ? JSON.parse(localStorage.getItem("data"))
    : {},
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    },
})

export default authSlice.reducer;