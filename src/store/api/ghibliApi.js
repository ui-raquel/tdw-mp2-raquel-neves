import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ghibliApi = createApi({
  reducerPath: 'ghibliApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ghibliapi.vercel.app/',
  }),
  tagTypes: ['Films'],
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => '/films',
      providesTags: ['Films'],
    }),
    getFilmById: builder.query({
      query: (id) => `/films/${id}`,
    }),
  }),
})

export const { useGetFilmsQuery, useGetFilmByIdQuery } = ghibliApi