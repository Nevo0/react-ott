import React, { useState } from 'react';


import styles from './Authorization.module.css';

export function Authorization() {

  const [showSignUp, setShowSignUp] = useState(false);
  
  const handleToggleClass = (event: any) => {
    console.log("xxx");
    
    // onChange={(e) => handleSetMaterial(e)
    setShowSignUp(showSignUp=> !showSignUp)
 }

  return (
    <div>
     
<div className={`${styles.cont} ${showSignUp ? styles.s__signup : ''}`}>
  <div className={`${styles.form} ${styles.sign_in}`}>
    <h2>Welcome back,</h2>
    <label>
      <span>Email</span>
      <input type="email" />
    </label>
    <label>
      <span>Password</span>
      <input type="password" />
    </label>
    <p className={styles.forgot_pass}>Forgot password?</p>
    <button type="button" className={styles.submit}>Sign In</button>
    <button type="button" className={styles.fb_btn}>Connect with <span>facebook</span></button>
  </div>
  <div className={styles.sub_cont}>
    <div className={styles.img}>
      <div className={`${styles.img__text} ${styles.m__up}`}>
        <h2>New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <div className={`${styles.img__text} ${styles.m__in}`}>
        <h2>One of us?</h2>Change
        <p>If you already has an account, just sign in. We've missed you!</p>
      </div>
            <div className={styles.img__btn} onClick={(e) => handleToggleClass(e)}>
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
            <button type="button" className={styles.submit} >Sign Up</button>
      <button type="button" className={styles.fb_btn}>Join with <span>facebook</span></button>
    </div>
  </div>
</div>

<a href="https://dribbble.com/shots/3306190-Login-Registration-form" target="_blank" className={styles.icon_link}>
  <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png"/>
</a>
<a href="https://twitter.com/NikolayTalanov" target="_blank" className={styles.icon_link__twitter}>
  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
</a>
    </div>
    
  );
}
