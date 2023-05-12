import { configureStore } from '@reduxjs/toolkit'
import counter from './user/userSlice'
import settings from './settings/settingsSlice'
import signup from './auth/authSlice';


const store = configureStore({
  reducer: {
    counter,
    settings,
    signup
    
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;