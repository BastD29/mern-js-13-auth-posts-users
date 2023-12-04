import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      // transformResponse: (response) => response.products,
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
export { userApi };
