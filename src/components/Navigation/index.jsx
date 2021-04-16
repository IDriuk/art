import React from "react"
import {  useHistory  } from "react-router-dom"
import backIcon from '../../assets/icons/back.png'
import './styles.css'

const Navigation = () => {
  const history = useHistory()
  const onBack = () => { history.goBack() }
  return (
    <div className='navigation'>
      <div className='navigation-back' onClick={onBack}>
        <img src={backIcon} alt="back" />
        <div>Back</div>
      </div>
      <div className='navigation-page'>1 of 14</div>
    </div>
  )
} 

export default Navigation