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
      const phrase = action.payload
      phrase.tags = phrase.tags.split(' ')
      state.phrases.push(action.payload)
    },
    deletePhraseOptimistic: (state, action) => {
      const phrases = state.phrases.filter(({phrase}) => phrase != action.payload)
      state.phrases = phrases
    }
  },
});

export const { updatePhrases, addPhraseOptimistic, deletePhraseOptimistic } = vocabularySlice.actions;

export const updatePhrasesAsync = () => async dispatch => {
  const phrases = await getPhrases()
  dispatch(updatePhrases(phrases));
};

export const addPhraseAsync = ({ phrase, link, start, end, tags, description }) => async dispatch => {

  await addPhrase({ phrase, link, start, end, tags, description })
  dispatch(addPhraseOptimistic({ phrase, link, start, end, tags, description }))
};

export const deletePhraseAsync = (phrase) => async dispatch => {
  // await deletePhrase(phrase)
  dispatch(deletePhraseOptimistic(phrase)) 
}

export const selectPhrases = state => state.vocabulary.phrases;

export default vocabularySlice.reducer;
