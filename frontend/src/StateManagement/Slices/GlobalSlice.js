import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    baseURL: "http://localhost:8000",
    signupURL: "http://localhost:8000/api/signup",
    loginURL: "http://localhost:8000/api/login",
    isLoggedIn: false,
};

const globalOptions = {
    name: "global",
    initialState,
    reducers: {
        setisLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
};

const globalSlice = createSlice(globalOptions);
export const { setisLoggedIn } = globalSlice.actions;
export default globalSlice.reducer;
