import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fields: {
      event_name: "",
      event_type: "",
      address_line1: "",
      address_line2: "",
      city: "",
      state: "",
      zip_code: "",
      country: "",
      image_url: "",
      start_datetime: "",
      end_datetime: "",
      event_description: "",
    },
  //   errorMessage: null,
  //   eventUpdateModal: false,
  // };
  // fields: {},
  errorMessage: null,
  eventUpdateModal: false,
};


export const eventUpdateSlice = createSlice({
  name: "eventUpdate",
  initialState,
  reducers: {
    // setEventName: (state, action) => {
    //   state.fields.event_name = action.payload;
    // },
    // setEventType: (state, action) => {
    //   state.fields.event_type = action.payload;
    // },
    // setAddress1: (state, action) => {
    //   state.fields.address_line1 = action.payload;
    // },
    // setAddress2: (state, action) => {
    //   state.fields.address_line2 = action.payload;
    // },
    // setCity: (state, action) => {
    //   state.fields.city = action.payload;
    // },
    // setState: (state, action) => {
    //   state.fields.state = action.payload;
    // },
    // setCountry: (state, action) => {
    //   state.fields.country = action.payload;
    // },
    // setZipCode: (state, action) => {
    //   state.fields.zip_code = action.payload;
    // },
    // setImgUrl: (state, action) => {
    //   state.fields.image_url = action.payload;
    // },
    // setStartTime: (state, action) => {
    //   state.fields.start_datetime = action.payload;
    // },
    // setEndTime: (state, action) => {
    //   state.fields.end_datetime = action.payload;
    // },
    // setEventDescription: (state, action) => {
    //   state.fields.event_description = action.payload;
    // },
    handleEventNameChange: (state, action) => {
      state.fields.event_name = action.payload;
    },
    handleEventTypeChange: (state, action) => {
      state.fields.event_type = action.payload;
    },
    handleAddress1Change: (state, action) => {
      state.fields.address_line1 = action.payload;
    },
    handleAddress2Change: (state, action) => {
      state.fields.address_line2 = action.payload;
    },
    handleCityChange: (state, action) => {
      state.fields.city = action.payload;
    },
    handleStateChange: (state, action) => {
      state.fields.state = action.payload;
    },
    handleCountryChange: (state, action) => {
      state.fields.country = action.payload;
    },
    handleZipCodeChange: (state, action) => {
      state.fields.zip_code = action.payload;
    },
    handleImgUrlChange: (state, action) => {
      state.fields.image_url = action.payload;
    },
    handleStartTimeChange: (state, action) => {
      state.fields.start_datetime = action.payload;
    },
    handleEndTimeChange: (state, action) => {
      state.fields.end_datetime = action.payload;
    },
    handleEventDescriptionChange: (state, action) => {
      state.fields.event_description = action.payload;
    },
    showEventUpdateModal: (state) => {
      state.eventUpdateModal = true;
    },
    hideEventUpdateModal: (state) => {
      state.eventUpdateModal = false;
    },
    reset: () => initialState,
  },
});

export const {
  setEventName,
  setEventType,
  setAddress1,
  setCity,
  setState,
  setCountry,
  setZipCode,
  setImgUrl,
  setStartTime,
  setEndTime,
  setEventDescription,
  handleEventNameChange,
  handleEventTypeChange,
  handleAddress1Change,
  handleAddress2Change,
  handleCityChange,
  handleStateChange,
  handleCountryChange,
  handleZipCodeChange,
  handleImgUrlChange,
  handleStartTimeChange,
  handleEndTimeChange,
  handleEventDescriptionChange,
  showEventUpdateModal,
  hideEventUpdateModal,
  reset,
} = eventUpdateSlice.actions;

export default eventUpdateSlice.reducer;
