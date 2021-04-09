import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom"
import { fetchQuizzes } from '../actions'
import Quizz from './Quizz'

const Quizzes = () => {
  const dispatch = useDispatch()

  let match = useRouteMatch();
  
  useEffect(() => {
    dispatch(fetchQuizzes())
  }, [dispatch])

  return (
    <div>
      <h1>Quizzes</h1>
      <Switch>
        <Route path={`${match.path}/:quizzId`}>
          <Quizz/>
        </Route>
      </Switch>
    </div>
  )
} 

export default Quizzes