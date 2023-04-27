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
      providesTags: (result) => {
        const tags = [{ type: "Events", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Events", id })), ...tags];
      },
    }),
    getAttendingEvents: builder.query({
        query: () => "/api/events/attending",
        transformResponse: (response) => response.events,
        providesTags: (result) => {
            const tags = [{ type: "Events", id: "LIST" }];
            if (!result) return tags;
            return [...result.map(({ id }) => ({ type: "Events", id })), ...tags];
      },
    }),
    getHostingEvents: builder.query({
        query: () => "/api/events/hosting",
        transformResponse: (response) => response.events,
        providesTags: (result) => {
            const tags = [{ type: "Events", id: "LIST" }];
            if (!result) return tags;
            return [...result.map(({ id }) => ({ type: "Events", id })), ...tags];
      },
    }),
    getEvent: builder.query({
      query: (id) => ({
        url: `api/events/${id}`,
        transformResponse: (response) => response?.event,
        providesTags: ["Events"],
      }),
    }),
    createEvent: builder.mutation({
      query: (body) => ({
        url: "/api/events",
        method: "POST",
        body: body.fields,
        credentials: "include",
      }),
      invalidatesTags: [{ type: "Events", id: "LIST" }],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `api/events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Events", id }
      ],
    }),
  }),
});

export const {
    useGetEventsQuery,
    useCreateEventMutation,
    useGetEventQuery,
    useLazyGetEventQuery,
    useGetAttendingEventsQuery,
    useGetHostingEventsQuery,
    useDeleteEventMutation,
} = eventsApi;
