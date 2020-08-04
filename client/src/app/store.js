import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import vocabularyReducer from '../features/vocabulary/vocabularySlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    vocabulary: vocabularyReducer
  },
});
