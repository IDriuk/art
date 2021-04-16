import React from "react"
import nextIcon from '../../assets/icons/next.png'
import './styles.css'

const SingleQuestion = ({quizz, answer, onAnswer}) => {
  // let answerKey = answer ? Object.keys(answer)[0] : ''

  const {label, options} = quizz
  return (
    <div className='single-question'> 
      <h1 className='single-question-title'>{label}</h1>
      <div className='single-question-answers'>
        {options.map(({label, value}, i) =>  
          <div className='single-question-answer'
            key={i}
            onClick={() => onAnswer(value)}>
              <div>
                {label}
              </div>
              <img src={nextIcon} alt='next'/>
              {/* {value === answerKey ? '+' : ''} */}
          </div> )}
      </div>
    </div>
  )
} 

export default SingleQuestion