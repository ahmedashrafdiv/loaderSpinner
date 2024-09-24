import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: { loader: false },
  reducers: {
    changeLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export default loaderSlice.reducer;
export const { changeLoader } = loaderSlice.actions;
