import React, { useRef } from 'react'

export default () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  console.log('process.env ======', process.env)

  return (
    <form onSubmit={async (e) =>{
      e.preventDefault()
      const { value: email } = emailRef.current
      const { value: password } = passwordRef.current
      console.log(email, password);
      const res = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      console.log("json ====", json);
    }}>
      <input ref={emailRef} type="email" />
      <br />
      <input ref={passwordRef} type="password" />
      <br />
      <input type="submit" />
    </form>
  )
}