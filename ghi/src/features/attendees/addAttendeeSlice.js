import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    attendeeId: 0,
};

export const addAttendeeSlice = createSlice({
    name: "addAttendee",
    initialState,
    reducers: {
        getAttendeeId: (state, userId) => {
            state.attendeeId = userId;
        },
        reset: () => initialState,
    },
});

export const {
    getAttendeeId,
    reset
} = addAttendeeSlice.actions;

export default addAttendeeSlice.reducer;