import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { carsReducer } from '../redux/Cars/carsSlice';
// import { favoritesReducer } from './favorites/favoritesReducer';


export const rootReducer = combineReducers({
  cars: carsReducer,
  // favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

export default store;