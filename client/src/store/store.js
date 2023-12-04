import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products/apiSlice";
import { authApi } from "./auth/apiSlice3";
import { authReducer } from "./auth/index";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(authApi.middleware),
});

export { store };
