import { configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "../entitySlice";

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
  },
});
