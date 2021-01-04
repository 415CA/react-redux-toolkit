import { createSlice } from '@reduxjs/toolkit';

// Initial State
export const initialState = {
  data: [],
  query: '',
  error: null,
  isLoading: false,
  hasError: false,
};

// Slice for Reducers
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state, query) => {
      state.isLoading = true;
      state.query = query;
    },
    getDataSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    getDataFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    removeData: (state) => {
      state.data = [];
    },
  },
});

// Actions
export const { getData, getDataSuccess, getDataFailure, removeDataStatus } = dataSlice.actions;

// Selector
export const dataSelector = (state) => state.data;

// Reducer
export default dataSlice.reducer;

// Async Fetch Action
export const fetchData = (url, query) => async (dispatch) => {
  dispatch(getData(query));
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getDataSuccess(data));
  } catch (error) {
    dispatch(getDataFailure());
  }
};
