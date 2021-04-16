import { REQUEST_QUIZZES, RECEIVE_QUIZZES, SET_ANSWER } from '../constants'

export const quizzesReducer = (state = {
  isFetching: false,
  quizzes: [],
  answers: {}
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
    case SET_ANSWER:
      return {
        ...state,
        answers: updateAnswers(state.answers, action)
      }
    default:
      return state
  }
}

function updateAnswers(prevAnswers, action) {
  const answers = {...prevAnswers}
  const { key, value, questionType} = action
  let answer = answers[key] || {}

  if (questionType === 'multiple') {
    answer[value] = !answer[value]
  } else {
    answer = {[value]: true}
  }

  answers[key] = answer

  return answers
}