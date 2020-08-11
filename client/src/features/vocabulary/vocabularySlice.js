import { createSlice } from '@reduxjs/toolkit'
import { getPhrases, addPhrase } from '../../services/api'

export const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState: {
    phrases: []
  },
  reducers: {
    updatePhrases: (state, action) => {
      state.phrases = action.payload;
    },
    addPhraseOptimistic: (state, action) => {
      state.phrases.push(action.payload)
    }
  },
});

export const { updatePhrases, addPhraseOptimistic } = vocabularySlice.actions;

export const updatePhrasesAsync = () => async dispatch => {
  const phrases = await getPhrases()
  dispatch(updatePhrases(phrases));
};

export const addPhraseAsync = ({ phrase, link, start, end, tags, description }) => async dispatch => {

  await addPhrase({ phrase, link, start, end, tags, description })
  dispatch(addPhraseOptimistic({ phrase, link, start, end, tags, description }))
};

export const selectPhrases = state => state.vocabulary.phrases;

export default vocabularySlice.reducer;
