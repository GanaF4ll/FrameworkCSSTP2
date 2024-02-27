import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isDrawerVisible: false,
};
const drawerReducer = createSlice({
  name: "drawerReducer",
  initialState,
  reducers: {
    setIsDrawerReducer(state, action) {
      state.isDrawerVisible = action.payload;
    },
  },
});
export const { setIsDrawerReducer } = drawerReducer.actions;
export default drawerReducer;
