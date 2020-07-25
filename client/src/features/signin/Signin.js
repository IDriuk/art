import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

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