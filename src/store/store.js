import { configureStore } from '@reduxjs/toolkit';
import charactesReducer from './reducers/charactesSlice';

export const store = configureStore({
  reducer: { characters: charactesReducer },
});
