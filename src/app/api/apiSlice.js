import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSLice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Note", "User"],
  endpoints: (builder) => ({}),
});
