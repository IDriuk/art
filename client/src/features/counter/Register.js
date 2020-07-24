import React, { useRef } from 'react'
import { register } from '../../services/api'

export default () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  return (
    <form onSubmit={async (e) =>{
      e.preventDefault()
      const { value: email } = emailRef.current
      const { value: password } = passwordRef.current
      register()
    }}>
      <input ref={emailRef} type="email" />
      <br />
      <input ref={passwordRef} type="password" />
      <br />
      <input type="submit" />
    </form>
  )
}