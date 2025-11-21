import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ghibliApi = createApi({
  reducerPath: "ghibliApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ghibliapi.vercel.app/",
  }),
  tagTypes: ["Films", "People", "Species"],
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => "/films",
      providesTags: ["Films"],
    }),
    getFilmById: builder.query({
      query: (id) => `/films/${id}`,
    }),
    getPeople: builder.query({
      query: () => "/people",
      providesTags: ["People"],
    }),
    getSpecies: builder.query({
      query: () => "/species",
      providesTags: ["Species"],
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetFilmByIdQuery,
  useGetPeopleQuery,
  useGetSpeciesQuery,
} = ghibliApi;
