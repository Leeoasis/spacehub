import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
