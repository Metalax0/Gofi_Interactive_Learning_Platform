import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    baseURL: "http://localhost:8000",
    signupURL: "http://localhost:8000/api/signup",
    loginURL: "http://localhost:8000/api/login",
    userDataURL: "http://localhost:8000/api/userdata",
    createPostURL: "http://localhost:8000/api/createpost",
    getAllPostURL: "http://localhost:8000/api/getallpost",
    addCommentURL: "http://localhost:8000/api/addcomment",
    addhtmlchapter: "http://localhost:8000/api/addhtmlchapter",
    gethtmlchapter: "http://localhost:8000/api/gethtmlchapter",

    isLoggedIn: "false",
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
