import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${import.meta.env.VITE_TMDB_READ_TOKEN}`);
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  
  tagTypes: ["MovieSearch", "MovieImages", "MovieProviders"],
  endpoints: (builder) => ({

    searchMovie: builder.query({
      query: ({ query, year }) =>
        `search/movie?query=${encodeURIComponent(query)}&year=${year}`,
      providesTags: ["MovieSearch"],
    }),

    getMovieImages: builder.query({
      query: (id) => `movie/${id}/images`,
      providesTags: ["MovieImages"],
    }),

    getWatchProviders: builder.query({
      query: (id) => `movie/${id}/watch/providers`,
      providesTags: ["MovieProviders"],
    }),

    getVideos: builder.query({
      query: (id) => `movie/${id}/videos`,
    }),

  }),
});

export const { useSearchMovieQuery, useGetMovieImagesQuery, useGetVideosQuery } = tmdbApi;
