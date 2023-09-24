import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleUser } from "./singleUserApi";

const initialState = {
  singleUser: {},
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchSingleUser = createAsyncThunk(
  "singleUser/fetchSingleUser",
  async (id) => {
    const singleUser = await getSingleUser(id);
    return singleUser;
  }
);

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleUser = action.payload;
      })
      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.singleUser = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default singleUserSlice.reducer;
