import { createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:8000";

const initialState = {
    baseURL: baseURL,
    signupURL: `${baseURL}/api/signup`,
    loginURL: `${baseURL}/api/login`,
    updateTutorialProgressURL: `${baseURL}/api/updatetutorialprogress`,
    updateTestProgressURL: `${baseURL}/api/updateTestProgress`,
    userDataURL: `${baseURL}/api/userdata`,
    createPostURL: `${baseURL}/api/createpost`,
    deletePostURL: `${baseURL}/api/deletepost`,
    getAllPostURL: `${baseURL}/api/getallpost`,
    getAllAuthorPostURL: `${baseURL}/api/getallauthorpost`,
    addLikeToPostURL: `${baseURL}/api/likepost`,
    addCommentURL: `${baseURL}/api/addcomment`,
    deleteCommentURL: `${baseURL}/api/deletecomment`,
    addhtmlchapter: `${baseURL}/api/addhtmlchapter`,
    gethtmlchapter: `${baseURL}/api/gethtmlchapter`,
    getUserStatisticsURL: `${baseURL}/api/getUserStatistics`,

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
