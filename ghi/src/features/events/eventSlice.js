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
    createEvent: builder.mutation({
      query: (body) => ({
        url: "/api/events",
        method: "POST",
        body,
      }),
      invalidateTags: [{ type: "Events", id: "LIST" }],
    }),
    deleteEvent: builder.mutation({
      query: (event_id) => ({
        url: "api/events/{event_id}",
        method: "DELETE",
      }),
      invalidateTags: (result, error, { event_id }) => [
        { type: "Events", event_id },
      ],
    }),
  }),
});

export const { useGetEventsQuery, useCreateEventMutation } = eventsApi;
