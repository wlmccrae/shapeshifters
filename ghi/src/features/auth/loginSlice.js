import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fields: {
        username: '',
        password: ''
    },
    errorMessage: null,
    loginModal: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleEmailChange: (state, action) => {
      console.log("Action.payload in loginSlice", action.payload);
      state.fields.username = action.payload;
    },
    handlePasswordChange: (state, action) => {
      state.fields.password = action.payload;
    },
    showLoginModal: (state) => {
      state.loginModal = true;
    },
    hideLoginModal: (state) => {
      state.loginModal = false;
    },
    reset: () => initialState,
  },
});

export const {
    handleEmailChange,
    handlePasswordChange,
    showLoginModal,
    hideLoginModal,
    reset
} = loginSlice.actions;

export default loginSlice.reducer
