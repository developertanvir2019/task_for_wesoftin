import { configureStore } from "@reduxjs/toolkit";
import userProfilesReducer from "../features/userProfiles/userProfilesSlice";
export const store = configureStore({
  reducer: {
    userProfile: userProfilesReducer,
  },
});
