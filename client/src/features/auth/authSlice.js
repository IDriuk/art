import { createSlice } from '@reduxjs/toolkit';
import { register } from '../../services/api'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    token: ''
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { updateEmail, updatePassword, updateToken } = authSlice.actions;

export const updateTokenAsync = (user, history) => async dispatch => {
  const { email, password } = user
  const token = await register( email, password )
  if ( /Bearer/.test(token)) {
    history.push('about')
  }
  dispatch(updateToken(token));
};

export const selectAuth = state => state.auth.token;

export default authSlice.reducer;