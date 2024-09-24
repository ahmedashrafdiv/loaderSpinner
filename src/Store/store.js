import { configureStore } from "@reduxjs/toolkit";
import loader from "./Slices/loader";

export default configureStore({
  reducer: {
    loader: loader,
  },
});
