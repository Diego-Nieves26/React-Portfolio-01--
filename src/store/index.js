import { configureStore } from "@reduxjs/toolkit";
import seeSection from "./slices/seeSection.slice";

export default configureStore({
  reducer: {
    seeSection,
  },
});
