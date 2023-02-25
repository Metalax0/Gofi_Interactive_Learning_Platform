import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userID: null,
    fullName: null,
    userType: null,
};

const userOptions = {
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userID = action.payload.userID;
            state.fullName = action.payload.fullName;
            state.userType = action.payload.userType;
        },
        resetActiveUser: (state) => {
            state.userID = null;
            state.fullName = null;
            state.userType = null;
        },
    },
};

const userSlice = createSlice(userOptions);
export const { setActiveUser, resetActiveUser } = userSlice.actions;
export default userSlice.reducer;
