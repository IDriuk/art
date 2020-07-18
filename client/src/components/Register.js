import React, { useRef } from 'react'

export default () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      console.log(emailRef.current.value, passwordRef.current.value)
    }}>
      <input ref={emailRef} type="email" />
      <br />
      <input ref={passwordRef} type="password" />
      <br />
      <input type="submit" />
    </form>
  )
}