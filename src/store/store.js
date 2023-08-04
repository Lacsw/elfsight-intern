import { combineReducers, configureStore } from '@reduxjs/toolkit';
import charactesReducer from './reducers/charactesSlice';
import filterReducer from './reducers/filterSlice';
const reducer = combineReducers({
  characters: charactesReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer,
});
