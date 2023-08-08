import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';
import { logoutUser } from 'features/amsUserSlice';

const customFetch = axios.create({
  baseURL: 'https://simonelite-prod.dukka.com',
  headers: { 'Content-Type': 'application/json' },
});

// using interceptors to handle our headers
customFetch.interceptors.request.use((config) => {
  const amsUser = getUserFromLocalStorage();

  if (amsUser) {
    config.headers['Authorization'] = `Token ${amsUser.token}`;
  }
  return config;
});

export const checkForUnauthorizedResponse = (error: any, thunkAPI: any) => {
  if (
    error.response.detail === 'Authentication credentials were not provided.'
  ) {
    thunkAPI.dispatch(logoutUser());
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
  }

  console.log(error.response.data);
  return thunkAPI.rejectWithValue(error.response.detail);
};

export default customFetch;
