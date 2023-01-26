import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {
        fullname: "",
        email: "",
        password: "",
    },
};

const userOptions = {
    name: "user",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            return { ...state, userInfo: action.payload };
        },
    },
};

const userSlice = createSlice(userOptions);
export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
