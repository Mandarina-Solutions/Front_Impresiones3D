import { createSlice } from "@reduxjs/toolkit";

const userEmpty = {userName:'', pass:''}

export const userSlice = createSlice({
    name: 'user',
    initialState: userEmpty,
    reducers:{
        createUser: (state, action) => {
            return action.payload
        },
        updateUser: (state, action) => {
            return {...state, ...action.payload}
        },
        resetUser: () =>{
            return userEmpty
        }
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions 