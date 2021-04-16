import React from "react"
import { Link } from "react-router-dom";
import './styles.css'
import woman from '../../assets/images/woman_with_kid.png'

const Intro = () => {

  return (
    <div className='intro'>
      <div className='intro-left'>
        <h1 className='intro-title'>Get back in shape.</h1>
        <Link to="/quizzes/0">Start The Quiz</Link>
      </div>
      <div className='intro-right'>
        <img src={woman} alt="woman"/>
      </div>
    </div>
  )
} 

export default Intro