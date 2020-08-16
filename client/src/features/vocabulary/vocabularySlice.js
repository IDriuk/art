import { createSlice } from '@reduxjs/toolkit'
import { getPhrases, addPhrase, deletePhrase } from '../../services/api'

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
      state.phrases = state.phrases.filter(({_id}) => _id !== action.payload)
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

export const deletePhraseAsync = (_id) => async dispatch => {
  await deletePhrase(_id)
  dispatch(deletePhraseOptimistic(_id)) 
}

export const selectPhrases = state => state.vocabulary.phrases;

export default vocabularySlice.reducer;
