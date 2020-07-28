import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateTokenAsync } from "./authSlice";
import styles from "./Auth.module.css";

export const Auth = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <h1>SignIn</h1>
      <form
        className={styles.signin}
        onSubmit={async (e) => {
          e.preventDefault();
          const { value: email } = emailRef.current;
          const { value: password } = passwordRef.current;
          dispatch(updateTokenAsync({ email, password }, history ));
        }}
      >
        <input
          className={styles.signin__input}
          ref={emailRef}
          type="email"
          placeholder="email"
        />
        <input
          className={styles.signin__input}
          ref={passwordRef}
          type="password"
          placeholder="password"
        />
        <input className={styles.signin__confirm} type="submit" />
      </form>
    </>
  );
};
