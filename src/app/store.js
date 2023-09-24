import { configureStore } from "@reduxjs/toolkit";
import userProfilesReducer from "../features/userProfiles/userProfilesSlice";
import singleUserReducer from "../features/singleUser/singleUserSlice";
export const store = configureStore({
  reducer: {
    userProfiles: userProfilesReducer,
    singleUser: singleUserReducer,
  },
});
