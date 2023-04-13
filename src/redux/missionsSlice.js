// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
//   const response = await axios.get('https://api.spacexdata.com/v3/missions');
//   const { data } = response;
//   return data;
// });

// const initialState = {
//   missions: [],
//   status: 'idle',
//   error: null,
// };

// const missionsSlice = createSlice({
//   name: 'missions',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMissions.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMissions.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.missions = action.payload;
//       })
//       .addCase(fetchMissions.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default missionsSlice.reducer;
