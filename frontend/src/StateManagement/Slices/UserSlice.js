import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userID: null,
    fullName: null,
    email: null,
    token: null,
};

const userOptions = {
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userID = action.payload.userID;
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        resetActiveUser: (state) => {
            state.userID = null;
            state.fullName = null;
            state.email = null;
            state.token = null;
        },
    },
};

const userSlice = createSlice(userOptions);
export const { setActiveUser, resetActiveUser } = userSlice.actions;
export default userSlice.reducer;
