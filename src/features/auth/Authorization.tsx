import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { authUserAsync, userStatus } from "./authorizationSlice";

import styles from "./Authorization.module.css";

export function Authorization() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(userStatus);
  const [showSignUp, setShowSignUp] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status=== "failed") {
      setError("Authenticate field")
    }
    else {
      setError('')
    }
  }, [status]);

  const handleToggleClass = () => {
    setShowSignUp((showSignUp) => !showSignUp);
  };
  const initialValues: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };
  const [loginParams, setLoginParams] = useState(initialValues);

  const handleLogin = () => {
    dispatch(authUserAsync(loginParams));
  };
  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newLoginParams = { ...loginParams };
    newLoginParams.username = event.target.value;
    setLoginParams(newLoginParams);
    setError('')
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newLoginParams = { ...loginParams };
    newLoginParams.password = event.target.value;
    setLoginParams(newLoginParams);
    setError('')
  };

  return (
    <div>
      <div className={`${styles.cont} ${showSignUp ? styles.s__signup : ""}`}>
        <div className={`${styles.form} ${styles.sign_in}`}>
          <h2>Welcome back,</h2>
          <div className={styles.error}>{error}</div>
          <label>
            <span>Email</span>
            <input id="username" type="email" onChange={handleUsernameChange} />
          </label>
          <label>
            <span>Password</span>
            <input
              id="password"
              type="password"
              onChange={handlePasswordChange}
            />
          </label>
          <p className={styles.forgot_pass}>Forgot password?</p>
          <button
            id="submit-button"
            type="button"
            className={styles.submit}
            onClick={() => handleLogin()}
          >Sign In</button>
        </div>
        <div className={styles.sub_cont}>
          <div className={styles.img}>
            <div className={`${styles.img__text} ${styles.m__up}`}>
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className={`${styles.img__text} ${styles.m__in}`}>
              <h2>One of us?</h2>Change
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div
              className={styles.img__btn}
              onClick={(e) => handleToggleClass()}
            >
              <span className={styles.m__up}>Sign Up</span>
              <span className={styles.m__in}>Sign In</span>
            </div>
          </div>
          <div className={`${styles.form} ${styles.sign_up}`}>
            <h2>Time to feel like home,</h2>
            <label>
              <span>Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <button type="button" className={styles.submit}>
              Sign Up
            </button>
            <button type="button" className={styles.fb_btn}>
              Join with <span>facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
