import React from "react"
import './styles.css'

function convertHTMLEntity(text){
  const span = document.createElement('span');

  return text
  .replace(/&[#A-Za-z0-9]+;/gi, (entity,position,text)=> {
      span.innerHTML = entity;
      return span.innerText;
  });
}

const InfoQuestion = ({quizz, onNext}) => {

  const {label, description} = quizz
  const dangerousHTMLDescription = {__html: convertHTMLEntity(convertHTMLEntity(description))}
  return (
    <div className='info-question'> 
      <h1 className='info-question-title'>{label}</h1>
      <div className='info-question-description' dangerouslySetInnerHTML={dangerousHTMLDescription} />
      <div 
        className='info-question-continue'
        onClick={onNext}
      >
        OK, lets do it!
      </div>
    </div>
  )
} 

export default InfoQuestion