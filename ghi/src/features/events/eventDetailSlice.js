import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errorMessage: null,
    eventDetailModal: false,
};

export const eventDetailSlice = createSlice({
  name: "eventDetail",
  initialState,
  reducers: {
    showEventDetailModal: (state) => {
      state.eventDetailModal = true;
    },
    hideEventDetailModal: (state) => {
      state.eventDetailModal = false;
    }
  },
});

export const {
    showEventDetailModal,
    hideEventDetailModal
} = eventDetailSlice.actions;

export default eventDetailSlice.reducer;