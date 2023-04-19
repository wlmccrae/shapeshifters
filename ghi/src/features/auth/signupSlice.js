import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: {
    first_name: "",
    last_name: "",
    email: "",
    zip_code: "",
    hashed_password: "",
    password_confirmation: "",
  },
  errorMessage: null,
  signupModal: false,
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    handleFirstNameChange: (state, action) => {
      state.fields.first_name = action.payload;
    },
    handleLastNameChange: (state, action) => {
      state.fields.last_name = action.payload;
    },
    handleEmailChange: (state, action) => {
      state.fields.email = action.payload;
    },
    handleZipCodeChange: (state, action) => {
      state.fields.zip_code = action.payload;
    },
    handlePasswordChange: (state, action) => {
      state.fields.password = action.payload;
    },
    handlePasswordConfirmationChange: (state, action) => {
      state.fields.password_confirmation = action.payload;
    },
    error: (state, action) => {
      state.errorMessage = action.payload;
    },
    showSignupModal: (state) => {
      state.signupModal = true;
    },
    hideSignupModal: (state) => {
      state.signupModal = false;
    },
    reset: () => initialState,
  },
});

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
  error,
} = signupSlice.actions;

export default signupSlice.reducer;
