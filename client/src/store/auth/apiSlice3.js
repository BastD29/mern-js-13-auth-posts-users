import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      console.log("state:", state);

      const user = getState().auth.user;
      console.log("user:", user);

      // if (token) {
      //   headers.set("authorization", `Bearer ${token}`);
      // }
      // return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetMeQuery } = authApi;
export { authApi };
