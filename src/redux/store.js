// import { configureStore } from "@reduxjs/toolkit";
// import { filtersReducer } from "./filters/slice.js";
// import { likesReducer } from "./likes/slice.js";
// import { tracksReducer } from "./tracks/slice.js";

// export const store = configureStore({
//   reducer: {
//     tracks: tracksReducer,
//     filters: filtersReducer,
//     likes: likesReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice.js";
import { likesReducer } from "./likes/slice.js";
import { tracksReducer } from "./tracks/slice.js";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const likesPersistConfig = {
  key: 'likes',
  storage,
};

const persistedLikesReducer = persistReducer(likesPersistConfig, likesReducer);

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    filters: filtersReducer,
    likes: persistedLikesReducer, 
  },
});

export const persistor = persistStore(store);