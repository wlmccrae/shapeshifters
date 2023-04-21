import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errorMessage: null,
    eventDetailModal: false,
    eventId: 0,
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
    },
    getEventId: (state, id) => {
      state.eventId = id;
    }
  },
});

export const {
    showEventDetailModal,
    hideEventDetailModal,
    getEventId
} = eventDetailSlice.actions;

export default eventDetailSlice.reducer;