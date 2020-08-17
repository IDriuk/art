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
    <div className={styles.auth}>
      <h1 className={styles.title}>SignIn</h1>
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
          className={`${styles.input} form-control`}
          ref={emailRef}
          type="email"
          placeholder="email"
        />
        <input
          className={`${styles.input} form-control`}
          ref={passwordRef}
          type="password"
          placeholder="password"
        />
        <button 
          className={`${styles.submit} btn btn-lg btn-primary btn-block`} 
          type="submit">
          Signin
        </button>
      </form>
    </div>
  );
};
