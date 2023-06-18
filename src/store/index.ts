import { configureStore } from "@reduxjs/toolkit";

import settings from "./settings/settingsSlice";
import signup from "./auth/authSlice";
import counter from './counter/counter'

const store = configureStore({
  reducer: {
    settings,
    signup,
    counter,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
