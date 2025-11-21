import { configureStore } from "@reduxjs/toolkit";
import { ghibliApi } from "./api/ghibliApi";

export const store = configureStore({
  reducer: {
    [ghibliApi.reducerPath]: ghibliApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ghibliApi.middleware),
});
