import { configureStore } from "@reduxjs/toolkit";
import { ghibliApi } from "./api/ghibliApi";
import { tmdbApi } from "./api/tmdbApi";

export const store = configureStore({
  reducer: {
    [ghibliApi.reducerPath]: ghibliApi.reducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ghibliApi.middleware).concat(tmdbApi.middleware),
});
