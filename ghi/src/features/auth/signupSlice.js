import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    fields: {
        first_name: '',
        last_name: '',
        email: '',
        zip_code: '',
        hashed_password: '',
        password_confirmation: ''
    },
    errorMessage: null,
    modal: false,
};

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
        reducers: {
            handleFirstNameChange: (state, action) =>{
                state.fields.first_name = action.payload
                console.log("** FIRST NAME ** payload in SIGNUPSlice", action.payload)
            },
            handleLastNameChange: (state, action) =>{
                state.fields.last_name = action.payload
                console.log("** LAST NAME ** payload in SIGNUPSlice", action.payload)
            },
            handleEmailChange: (state, action) =>{
                state.fields.email = action.payload
                console.log("** EMAIL ** payload in SIGNUPSlice", action.payload)
            },
            handleZipCodeChange: (state, action) =>{
                state.fields.zip_code = action.payload
                console.log("** ZIPCODE ** payload in SIGNUPSlice", action.payload)
            },
            handlePasswordChange: (state, action) =>{
                state.fields.password = action.payload
                console.log("** PW ** payload in SIGNUPSlice", action.payload)
            },
            handlePasswordConfirmationChange: (state, action) =>{
                state.fields.password_confirmation = action.payload
                console.log("** PW CONFIRM ** payload in SIGNUPSlice", action.payload)
            },
            error: (state, action) => {
                state.errorMessage = action.payload
            },
            showSignupModal: (state) => {
                state.modal = true
            },
            hideSignupModal: (state) => {
                state.modal = false
            },
            reset: () => initialState
        }
})

export const {
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleZipCodeChange,
    handlePasswordChange,
    handlePasswordConfirmationChange,
    showSignupModal,
    hideSignupModal,
    reset,
    error
} = signupSlice.actions;

export default signupSlice.reducer