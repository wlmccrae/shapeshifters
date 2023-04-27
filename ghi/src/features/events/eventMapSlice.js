import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  center: {
    lat: -3.745,
    lng: -38.523,
  },
  eventMapModal: false,
  errorMessage: null,
};

export const eventMapSlice = createSlice({
    name: "eventMap",
    initialState,
    reducers: {
        showEventMapModal: (state) => {
            state.eventMapModal = true;
        },
        hideEventMapModal: (state) => {
            state.eventMapModal = false;
        },
        setLat: (state, lat) => {
            state.center.lat = lat.payload;
        },
        setLng: (state, lng) => {
              state.center.lng = lng.payload;
        }
    },
});

export const {
    showEventMapModal,
    hideEventMapModal,
    setLat,
    setLng
} = eventMapSlice.actions;

export default eventMapSlice.reducer;