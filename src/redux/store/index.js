import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer } from '../slices';

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
