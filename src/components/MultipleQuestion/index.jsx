import React from "react"
import uncheckedIcon from '../../assets/icons/unchecked.png'
import checkedIcon from '../../assets/icons/checked.png'
import './styles.css'

const MultipleQuestion = ({quizz, answer, onNext, onAnswer}) => {
  let answerKeys = answer ? Object.keys(answer) : []
  answerKeys = answerKeys.filter( key => answer[key])

  const {label, options} = quizz
  return (
    <div className='multiple-question'> 
      <h1 className='multiple-question-title'>{label}</h1>
      <div className='multiple-question-answers'>
        {options.map(({label, value}, i) =>  
          <div 
            key={i}
            className='multiple-question-answer'
            onClick={() => onAnswer(value)}>
            {label}
            <img className='multiple-question-icon' alt={label} src={answerKeys.includes(value) ? checkedIcon : uncheckedIcon} />
          </div> )}
        <div 
          className='multiple-question-continue'
          onClick={onNext} >
            Continue
        </div>
      </div>
    </div>
  )
} 

export default MultipleQuestion