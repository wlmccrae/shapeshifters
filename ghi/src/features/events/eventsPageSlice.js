import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errorMessage: null,
    userRole: "attending",
};

export const eventsPageSlice = createSlice({
    name: "eventsPage",
    initialState,
    reducers: {
        showHostingEvents: (state) => {
            state.userRole = "hosting";
        },
        showAttendingEvents: (state) => {
            state.userRole = "attending";
        }
    },
});

export const {
    showHostingEvents,
    showAttendingEvents
} = eventsPageSlice.actions;

export default eventsPageSlice.reducer;
