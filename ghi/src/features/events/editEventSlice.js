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
  eventId: null,
  editEventModal: false,
};

export const editEventSlice = createSlice({
  name: "editEvent",
  initialState,
  reducers: {
    loadEvent: (state, action) => {
      const { id, fields } = action.payload;
      state.eventId = id;
      state.fields = { ...fields };
      state.editEventModal = true;
    },
    handleEditEventNameChange: (state, action) => {
      state.fields.event_name = action.payload;
    },
    handleEditEventTypeChange: (state, action) => {
      state.fields.event_type = action.payload;
    },
    handleEditAddress1Change: (state, action) => {
      state.fields.address_line1 = action.payload;
    },
    handleEditAddress2Change: (state, action) => {
      state.fields.address_line2 = action.payload;
    },
    handleEditCityChange: (state, action) => {
      state.fields.city = action.payload;
    },
    handleEditStateChange: (state, action) => {
      state.fields.state = action.payload;
    },
    handleEditCountryChange: (state, action) => {
      state.fields.country = action.payload;
    },
    handleEditZipCodeChange: (state, action) => {
      state.fields.zip_code = action.payload;
    },
    handleEditImgUrlChange: (state, action) => {
      state.fields.image_url = action.payload;
    },
    handleEditStartTimeChange: (state, action) => {
      state.fields.start_datetime = action.payload;
    },
    handleEditEndTimeChange: (state, action) => {
      state.fields.end_datetime = action.payload;
    },
    handleEditEventDescriptionChange: (state, action) => {
      state.fields.event_description = action.payload;
    },
    hideEditEventModal: (state) => {
      state.editEventModal = false;
    },
    resetEdit: () => initialState,
  },
});

export const {
  loadEvent,
  handleEditEventNameChange,
  handleEditEventTypeChange,
  handleEditAddress1Change,
  handleEditAddress2Change,
  handleEditCityChange,
  handleEditStateChange,
  handleEditCountryChange,
  handleEditZipCodeChange,
  handleEditImgUrlChange,
  handleEditStartTimeChange,
  handleEditEndTimeChange,
  handleEditEventDescriptionChange,
  hideEditEventModal,
  resetEdit,
} = editEventSlice.actions;

export default editEventSlice.reducer;
