import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products/apiSlice";
import { authApi } from "./auth/apiSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(authApi.middleware),
});

export { store };
