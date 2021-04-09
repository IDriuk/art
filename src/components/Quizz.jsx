import React from "react"
import { useSelector } from 'react-redux'
import {  Link, useRouteMatch, useParams, generatePath, useHistory  } from "react-router-dom"
import { quizzesSelector } from '../selectors'

const Quizz = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const { quizzId } = useParams()
  const quizzes = useSelector(quizzesSelector)
  const nextPath = generatePath(match.path, {quizzId: +quizzId + 1})
  const prevPath = generatePath(match.path, {quizzId: +quizzId - 1})
  
  if(!quizzes[quizzId]) {
    return <Link to={'/'}>Congratulations!</Link>
  }
  const {label, options, type/* , key */} = quizzes[quizzId]

  return (
    <div> 
      <div>
        <h3>{label}</h3>
        <ul>
          {type !== 'info' && options.map(({label, value}, i) => (
            <li key={i} onClick={() => {history.push(nextPath) }}>
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link to={prevPath}>Prev</Link> &nbsp;
        <Link to={nextPath}>Next</Link>
      </div>
    </div>
  )
} 

export default Quizz