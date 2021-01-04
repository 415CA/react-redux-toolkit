import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer, dataReducer } from '../slices';

export default configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
