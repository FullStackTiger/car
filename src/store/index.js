import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "./cars/slices";
import uiReducer from "./ui/slices";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cars: carsReducer,
  },
});
