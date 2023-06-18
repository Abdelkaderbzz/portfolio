import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface settingsState {
  isSidebarOpened: boolean;
  isNavigationbarOpened: boolean;
}

const initialState: settingsState = {
  isSidebarOpened: true,
  isNavigationbarOpened: true,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpened = !current(state).isSidebarOpened;
    },
    // openSidebar: (state) => {
    //   state.isSidebarOpened = true;
    // },
    closeSidebar: (state) => {
      state.isSidebarOpened = true;
    },
    toggleNavigation: (state) => {
      state.isNavigationbarOpened = !current(state).isNavigationbarOpened;
    },
    // openNavigation: (state) => {
    //   state.isNavigationbarOpened = true;
    // },
    closeNavigation: (state) => {
      state.isNavigationbarOpened = true;
    },
  },
});

export const {
  toggleSidebar,
  toggleNavigation,
  // openSidebar,
  // openNavigation,
  closeSidebar,
  closeNavigation,
} = settingsSlice.actions;

export default settingsSlice.reducer;
