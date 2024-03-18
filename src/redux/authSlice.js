import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        loading: false,
        error: false,
    },
    reducers: {
        LoginStart: (state, action) => {
            state.currentUser = null
            state.loading = true
            state.error = false
        },
        LoginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false
            state.error = false
        },
        LoginFailure: (state, action) => {
            state.currentUser = null
            state.loading = false
            state.error = true
        },

    }
})

export const { LoginStart, LoginSuccess, LoginFailure } = authSlice.actions;
export default authSlice;