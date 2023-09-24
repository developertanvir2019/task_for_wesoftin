import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProfiles } from "./userProfilesApi";

const initialState = {
  userProfiles: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchUserProfiles = createAsyncThunk(
  "userProfiles/fetchUserProfiles",
  async () => {
    const userProfiles = await getUserProfiles();
    return userProfiles;
  }
);

const userProfilesSlice = createSlice({
  name: "userProfiles",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfiles.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUserProfiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfiles = action.payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, action) => {
        state.isLoading = false;
        state.userProfiles = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default userProfilesSlice.reducer;
