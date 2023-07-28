import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../utils/localStorage';
import customFetch, { checkForUnauthorizedResponse } from '../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  trdUser: getUserFromLocalStorage(),
  isUserRegistered: false,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (amsUser: any, thunkAPI: any) => {
    try {
      const resp = await customFetch.post('/accounts/', amsUser);
      console.log(resp.data);
      toast.success('You Successfully SignedUp');
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (amsUser: any, thunkAPI: any) => {
    try {
      const resp = await customFetch.post('/accounts/login/', amsUser);
      console.log(resp.data);
      const { email } = amsUser;
      let userDetails = {
        email: email,
        token: resp.data.token,
      };
      return userDetails;
    } catch (error: any) {
      console.log(error);
      console.log(error.response);

      if (error.response.data.error) {
        return thunkAPI.rejectWithValue(error.response.data.error);
      }
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

const trdUserSlice = createSlice({
  name: 'amsUser',
  initialState,
  reducers: {
    logoutUser: (state: any) => {
      removeUserFromLocalStorage();
      state.amsUser = null;
      state.isUserRegistered = false;
    },
    restoreRegisteredUser: (state: any, { payload }: any) => {
      state.isUserRegistered = false;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(registerUser.pending, (state: any, { payload }: any) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state: any, { payload }: any) => {
        state.isLoading = false;
        state.isUserRegistered = true;
      })
      .addCase(registerUser.rejected, (state: any, { payload }: any) => {
        state.isLoading = false;
        state.isUserRegistered = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state: any, action: any) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state: any, { payload }: any) => {
        console.log(payload);
        state.isLoading = false;
        state.amsUser = payload;
        toast.success(`👋🏾 Hello There! ${payload.email}`);
        addUserToLocalStorage(payload);
      })
      .addCase(loginUser.rejected, (state: any, { payload }: any) => {
        state.isLoading = false;
        state.amsUser = null;
        state.isUserRegistered = false;
        toast.error(payload);
      });
  },
});

export const { logoutUser, restoreRegisteredUser } = trdUserSlice.actions;

export default trdUserSlice.reducer;
