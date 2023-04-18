import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: {
    event_name: '',
    event_type: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    image_url: '',
    start_datetime: '',
    end_datetime: '',
    event_description: ''
  },
  errorMessage: null
};

export const newEventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    handleEventNameChange: (state, action) => {
      state.fields.event_name = action.payload;
      console.log("** Event Name ** payload in EventSlice", action.payload)
    },
    handleEventTypeChange: (state, action) => {
      state.fields.event_type = action.payload;
      console.log("** EVENT TYPE ** payload in EVENTSlice", action.payload)
    },
    handleAddress1Change: (state, action) => {
      state.fields.address_line1 = action.payload;
    },
    handleAddress2Change: (state, action) => {
      state.fields.address_line2 = action.payload
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
    reset: () => initialState
  },
});

export const {
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
    reset
} = newEventSlice.actions;

export default newEventSlice.reducer;