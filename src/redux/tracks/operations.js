import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchNewTracks = createAsyncThunk(
  "tracks/getNew",
  async (filtres, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        ...filtres,
        page: 1,
        limit: 5,
      }).toString();

      const response = await axios.get(`/campers?${params}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchNextTracks = createAsyncThunk(
  "tracks/getNext",
  async (params, thunkAPI) => {
    try {
      const paramsSearch = new URLSearchParams({
        ...params,
        limit: 5,
      }).toString();

      const response = await axios.get(`/campers?${paramsSearch}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchById = createAsyncThunk(
  "tracks/byId",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
