// src/slices/index.js
import { combineReducers } from '@reduxjs/toolkit';
import recipesReducer from './recipes';

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export default rootReducer;
