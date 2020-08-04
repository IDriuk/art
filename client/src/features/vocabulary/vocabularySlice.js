import { createSlice } from '@reduxjs/toolkit';
import { register } from '../../services/api'

export const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState: {
    phrases: []
  },
  reducers: {
    updatePhrases: (state, action) => {
      state.phrases = action.payload;
    }
  },
});

export const { updatePhrases } = vocabularySlice.actions;

export const updatePhrasesAsync = (token) => async dispatch => {
  const phrases = await getPhrases(token)
  dispatch(updatePhrases(phrases));
};

export const selectVocabulary = state => state.vocabulary.token;

export default vocabularySlice.reducer;
