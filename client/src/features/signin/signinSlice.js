import { createSlice } from '@reduxjs/toolkit';
import { register } from '../../services/api'

export const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = signinSlice.actions;

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectSignin = state => state.signin.value;

export default signinSlice.reducer;
