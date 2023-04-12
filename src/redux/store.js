import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketsSlice';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
