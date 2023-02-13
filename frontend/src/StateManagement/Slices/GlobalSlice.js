import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    baseURL: "http://localhost:8000",
    signupURL: "http://localhost:8000/signup",
    loginURL: "http://localhost:8000/login",
};

const globalOptions = {
    name: "global",
    initialState,
    reducers: {},
};

const globalSlice = createSlice(globalOptions);
export const {} = globalSlice.actions;
export default globalSlice.reducer;
