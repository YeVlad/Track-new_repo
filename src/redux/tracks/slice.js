import { createSlice } from "@reduxjs/toolkit";
import { fetchNewTracks, fetchNextTracks, fetchById } from "./operations";

const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    items: [],
    oneItem: {},
    isLoading: false,
    error: false,
    isEnd: false,
  },
  extraReducers: (builder) => {
    builder
      // new search
      .addCase(fetchNewTracks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.items = [];
        state.isEnd = false;
      })
      .addCase(fetchNewTracks.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload.items;
        state.isLoading = false;
      })
      .addCase(fetchNewTracks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // next page
      .addCase(fetchNextTracks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNextTracks.fulfilled, (state, action) => {
        state.error = null;
        state.items.push(...action.payload.items);
        if (action.payload.items.length < 5) {
          state.isEnd = true;
        }

        state.isLoading = false;
      })
      .addCase(fetchNextTracks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // by id
      .addCase(fetchById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.oneItem = {};
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.error = null;
        state.oneItem = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export const tracksReducer = tracksSlice.reducer;
