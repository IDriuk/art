import { quizzesUrl } from '../apis'
import { REQUEST_QUIZZES, RECEIVE_QUIZZES, SET_ANSWER } from '../constants'

const requestQuizzes = () => ({
  type: REQUEST_QUIZZES
})

const receiveQuizzes = json => ({
  type: RECEIVE_QUIZZES,
  quizzes: json
})

export const fetchQuizzes = () => dispatch => {
  dispatch(requestQuizzes())
  return fetch(quizzesUrl)
    .then(response => response.json())
    .then(json => {
      if (json.data && json.data.questions) {
        dispatch(receiveQuizzes(json.data.questions))
      }
    })
}

export const setAnswer = (key, value, questionType) => ({
  type: SET_ANSWER,
  key,
  value,
  questionType
}) 