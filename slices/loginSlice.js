import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: null
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
    }
});

export const { setAuth } = loginSlice.actions;

export const selectAuth = (state) => state.login.auth;


export default loginSlice.reducer;
