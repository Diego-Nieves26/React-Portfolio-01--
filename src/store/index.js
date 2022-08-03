import { configureStore } from "@reduxjs/toolkit";
import seeSection from "./slices/seeSection.slice";
import message from "./slices/message.slice";

export default configureStore({
  reducer: {
    seeSection,
    message,
  },
});
