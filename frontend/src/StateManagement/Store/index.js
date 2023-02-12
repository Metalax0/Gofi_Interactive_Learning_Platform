import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "../Slices/GlobalSlice";
import UserSlice from "../Slices/UserSlice";

const store = configureStore({
    reducer: {
        user: UserSlice,
        global: GlobalSlice,
    },
});

export default store;
