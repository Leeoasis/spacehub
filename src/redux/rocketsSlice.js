import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  const { data } = response;
  return data;
});

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        rockets: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default rocketsSlice.reducer;
