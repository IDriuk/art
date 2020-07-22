import React, { useRef } from 'react'

const isProd = process.env.NODE_ENV === 'production'

export default () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  return (
    <form onSubmit={async (e) =>{
      e.preventDefault()
      const { value: email } = emailRef.current
      const { value: password } = passwordRef.current
      console.log(email, password);
      const res = await fetch(`${isProd ? '' : 'http://localhost:5000'}/api/auth/register`, {
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