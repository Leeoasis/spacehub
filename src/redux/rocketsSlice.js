import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

export const reserveRocket = createAsyncThunk('rockets/reserveRocket', async (rocketId) => {
  const response = await axios.patch(`https://api.spacexdata.com/v3/rockets/${rocketId}`, {
    reserved: true,
  });
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null,
  },
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
      }))
      .addCase(reserveRocket.fulfilled, (state, action) => {
        const reservedRocket = action.payload;
        const existingRocket = state.rockets.find((rocket) => rocket.id === reservedRocket.id);
        if (existingRocket) {
          existingRocket.reserved = true;
        }
      });
  },
});

export default rocketsSlice.reducer;
