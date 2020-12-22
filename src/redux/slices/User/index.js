import { createSlice } from '@reduxjs/toolkit';

// Initial State
export const initialState = {
  email: '',
  data: [],
  query: '',
  authUser: false,
  error: null,
  loading: false,
  hasErrors: false,
};

// Slice for Reducers
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, query) => {
      state.loading = true;
      state.query = query;
    },
    getUserSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUserFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setUserStatus: (state, { payload }) => {
      state.email = payload;
      state.authUser = true;
    },
    removeUserStatus: (state) => {
      state.email = '';
      state.authUser = false;
    },
  },
});

// Actions
export const {
  getUser,
  getUserSuccess,
  getUserFailure,
  setUserStatus,
  removeUserStatus,
} = userSlice.actions;

// Selector
export const userSelector = (state) => state.user;

// Reducer
export default userSlice.reducer;

// Async Fetch Action
export const fetchUser = (query) => async (dispatch) => {
  dispatch(getUser(query));

  try {
    const response = await fetch(`http://localhost:3001/user/${query}`);
    const data = await response.json();
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserFailure());
  }
};
