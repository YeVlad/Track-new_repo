import { createSlice } from "@reduxjs/toolkit";

const likesInitialState = {
  items: [],
};

const likesSlice = createSlice({
  name: "likes",
  initialState: likesInitialState,
  reducers: {
    changeLikes(state, action) {
      let array = state.items.slice();
      if (array.includes(action.payload)) {
        array = array.filter((item) => item != action.payload);
      } else {
        array.push(action.payload);
      }
      state.items = array;
    },
  },
});

export const { changeLikes } = likesSlice.actions;
export const likesReducer = likesSlice.reducer;
