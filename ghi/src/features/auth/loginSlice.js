import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fields: {
        username: '',
        password: ''
    },
    errorMessage: null
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        handleEmailChange: (state, action) => {
            console.log("Action.payload in loginSlice", action.payload)
            state.fields.username = action.payload
        },
        handlePasswordChange: (state, action) => {
            state.fields.password = action.payload
        },
        reset: () => initialState
    }
})

export const { handleEmailChange, handlePasswordChange, reset } = loginSlice.actions;

export default loginSlice.reducer
