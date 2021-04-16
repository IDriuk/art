import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch, useParams, generatePath, useHistory  } from "react-router-dom"
import { quizzesSelector, answersSelector } from '../selectors'
import { setAnswer } from '../actions'
import Navigation from './Navigation'
import SingleQuestion from './SingleQuestion'
import MultipleQuestion from './MultipleQuestion'
import InfoQuestion from './InfoQuestion'
import Congratulations from "./Cogratulations"

const Quizz = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const match = useRouteMatch()
  const { quizzId } = useParams()
  const quizzes = useSelector(quizzesSelector)
  const answers = useSelector(answersSelector)
  const quizz = quizzes[quizzId]

  if(!quizz) {
    return <Congratulations onClick={()=> history.push('/')} />
  }
  
  const {type, key} = quizz
  const answer = answers[key]

  const onNext = (curentValue) => {
    let step = curentValue !== 'improve_specific_body_areas' && key === 'primary_goal' ? 2 : 1
    let nextPath = generatePath(match.path, {quizzId: +quizzId + step})
    history.push(nextPath)
  }

  const onAnswer = (value) => {
    if (type === 'single') {
      onNext(value)
    }
    dispatch(setAnswer(key, value, type))   
  } 

  return (
    <div> 
      <Navigation />
      {type === 'single' && <SingleQuestion quizz={quizz} answer={answer} onAnswer={onAnswer} />}
      {type === 'multiple' && <MultipleQuestion quizz={quizz} answer={answer} onNext={onNext} onAnswer={onAnswer} />}
      {type === 'info' && <InfoQuestion quizz={quizz} onNext={onNext} />}
    </div>
  )
} 

export default Quizz