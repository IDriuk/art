import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateEmail,
  updatePassword,
  updateToken,
  updateTokenAsync
} from './authSlice';
import styles from './Auth.module.css';

export const Auth = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const dispatch = useDispatch();

  return (
    <form onSubmit={async (e) =>{
      e.preventDefault()
      const { value: email } = emailRef.current
      const { value: password } = passwordRef.current
      dispatch(updateTokenAsync({ email, password }))
    }}>
      <input ref={emailRef} type="email" />
      <br />
      <input ref={passwordRef} type="password" />
      <br />
      <input type="submit" />
    </form>
  )
}