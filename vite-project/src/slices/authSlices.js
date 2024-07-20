import { createSlice } from "@reduxjs/toolkit";

const authSlices =  createSlice({
    name:"auth",
    initialState:{
        user:[],
        loading: false
    },
    reducers:{
        setUserRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        setUserSuccess(state, action) {
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        },
        setUserFail(state) {
            return {
                ...state,
                loading: false
            };
        },
    }
})
export const {setUserRequest,setUserSuccess,setUserFail} =authSlices.actions;
export default authSlices.reducer