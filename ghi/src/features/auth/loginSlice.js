import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
    fields: {
        username: '',
        password: ''
    },
    errorMessage: null,
    loginModal: false,
=======
  fields: {
    username: "",
    password: "",
  },
  errorMessage: null,
  loginModal: false,
>>>>>>> 5a62864c7b761f18a771bb566ed708bef75ee31f
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleEmailChange: (state, action) => {
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
<<<<<<< HEAD
    handleEmailChange,
    handlePasswordChange,
    showLoginModal,
    hideLoginModal,
    reset
=======
  handleEmailChange,
  handlePasswordChange,
  showLoginModal,
  hideLoginModal,
  reset,
>>>>>>> 5a62864c7b761f18a771bb566ed708bef75ee31f
} = loginSlice.actions;

export default loginSlice.reducer;
