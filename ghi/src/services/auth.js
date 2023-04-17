import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_HOST}`,
    credentials: "include",
  }),
  tagTypes: ["Account"],
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => "/token",
      tranformResponse: (response) => response?.account,
      providesTags: ["Account"],
    }),
    login: builder.mutation({
      query: (body) => {
        console.log("BODY: ", body);
        const formData = new FormData();
        formData.append('username', body.fields.username);
        console.log("BODY EMAIL:", body.fields.email);
        formData.append("password", body.fields.password);
        console.log("BODY PASSWORD:", body.fields.password)
        return {
          url: "/token",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["Account"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "DELETE",
      }),
      invalidatesTags: ["Account"],
    }),
    signup: builder.mutation({
      query: (body) => {
        // const formData = new FormData();
        // console.log("body", body)
        // formData.append("first_name", body.fields.first_name);
        // formData.append("last_name", body.fields.last_name);
        // formData.append("email", body.fields.email);
        // formData.append("zip_code", body.fields.zip_code);
        // formData.append("password", body.fields.hashed_password);
        // body.fields.hashed_password = body.fields.password;
        return {
          url: "/api/accounts",
          method: "POST",
          body: body.fields,
          credentials: "include",
        };
      },
      invalidatesTags: ["Account"],
    }),
  }),
});

export const {
  useGetAccountQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
} = authApi;
