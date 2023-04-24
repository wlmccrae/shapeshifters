import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_HOST}`,
    credentials: "include",
  }),
  tagTypes: ["Events"],
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "/api/events",
      transformResponse: (response) => response.events,
      providedTags: (result) => {
        const tags = [{ type: "Events", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Events", id })), ...tags];
      },
    }),
    getAttendingEvents: builder.query({
        query: () => "/api/events/attending",
        transformResponse: (response) => response.events,
        providedTags: (result) => {
            const tags = [{ type: "Events", id: "LIST" }];
            if (!result) return tags;
            return [...result.map(({ id }) => ({ type: "Events", id })), ...tags];
      },
    }),
    getHostingEvents: builder.query({
        query: () => "/api/events/hosting",
        transformResponse: (response) => response.events,
        providedTags: (result) => {
            const tags = [{ type: "Events", id: "LIST" }];
            if (!result) return tags;
            return [...result.map(({ id }) => ({ type: "Events", id })), ...tags];
      },
    }),
    getEvent: builder.query({
      query: (event_id) => ({
        url: `api/events/${event_id}`,
        transformResponse: (response) => response?.event,
        providedTags: ["Event"],
      }),
    }),
    createEvent: builder.mutation({
      query: (body) => ({
        url: "/api/events",
        method: "POST",
        body: body.fields,
        credentials: "include",
      }),
      invalidateTags: [{ type: "Events", id: "LIST" }],
    }),
    deleteEvent: builder.mutation({
      query: (event_id) => ({
        url: `api/events/${event_id}`,
        method: "DELETE",
      }),
      invalidateTags: (result, error, { event_id }) => [
        { type: "Events", event_id },
      ],
    }),
  }),
});

export const {
    useGetEventsQuery,
    useCreateEventMutation,
    useGetEventQuery,
} = eventsApi;
