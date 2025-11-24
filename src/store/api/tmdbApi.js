import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWU3Y2YwNjVmMWU5OTFhMTMwYzFlMmM2NzZmMWM1MCIsIm5iZiI6MTc2MzgwNTE0NS42MTEsInN1YiI6IjY5MjE4N2Q5ZTFlOTlkNDYwYzMyYTA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jp2D1eo_PCzWp5nfTpDAldWf1ZkoR17GUAsPt9zkoQU'
);
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
