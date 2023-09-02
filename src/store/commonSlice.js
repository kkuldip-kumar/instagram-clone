import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      console.log("isSidebarOpen", state.isSidebarOpen);
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
      console.log("close sidebar", state.isSidebarOpen);
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
      console.log("open sidebar", state.isSidebarOpen);
    },
  },
});

export const { closeSidebar, openSidebar, toggleSidebar } = commonSlice.actions;

export default commonSlice.reducer;
