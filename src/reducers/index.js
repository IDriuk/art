import { REQUEST_QUIZZES, RECEIVE_QUIZZES } from '../constants'

export const quizzesReducer = (state = {
  isFetching: false,
  quizzes: []
}, action ) => {
  switch (action.type) {
    case REQUEST_QUIZZES:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_QUIZZES:
      return {
        ...state,
        isFetching: false,
        quizzes: action.quizzes
      }
    default:
      return state
  }
}