import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attendeesApi = createApi({
  reducerPath: "attendeesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_HOST}`,
    credentials: "include",
  }),
  tagTypes: ["Attendee"],
  endpoints: (builder) => ({
    addAttendee: builder.mutation({
      query: (event_id) => ({
          url: `/api/events/${event_id}/attendees`,
          method: "POST",
          body: event_id,
          credentials: "include",
      }),
      invalidatesTags: ["Attendee"],
    }),
  }),
});

export const {
    useAddAttendeeMutation,
} = attendeesApi;