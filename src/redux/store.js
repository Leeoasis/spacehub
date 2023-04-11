import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
