import React from "react"
import './styles.css'


const Congratulations = ({onClick}) => {

  return (
    <div className='congratulations'>
      <div  
        className='info-question-continue' 
        onClick={onClick}>
          Congratulations!
      </div>
    </div>
  )
} 

export default Congratulations