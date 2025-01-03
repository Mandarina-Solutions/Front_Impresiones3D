import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";

export const userStore = configureStore({
    reducer : {
        user: userSlice.reducer
    }
})