import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filters/slice.js";
import { likesReducer } from "./likes/slice.js";
import { tracksReducer } from "./tracks/slice.js";

const likesPersistConfig = {
  key: "likes",
  storage,
};

const persistedLikesReducer = persistReducer(likesPersistConfig, likesReducer);

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    filters: filtersReducer,
    likes: persistedLikesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
