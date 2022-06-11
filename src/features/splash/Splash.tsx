import React, { useState } from 'react';


import styles from './Splash.module.css';

export function Splash() {
 

  const incrementValue = Number || 0;

  return (
    <div>
      <div className={styles.splashBody}>
      <div className={styles.splashScreen}>
        <div className={styles.loadingContainer}>

          <div className={styles.loadingBox}>
              <img src="https://vignette.wikia.nocookie.net/borderlands/images/4/42/Vault_logo.png/revision/latest?cb=20100114181536" className={styles.splashLogo}/>
            <div className={styles.loadingBarContainer}>
              <div className={styles.loadingbar}></div>
            </div>

            <div className={styles.loadingCircle}>
              <div className={styles.circleOuter}></div>
              <div className={styles.circleLoader}></div>
            </div>
          </div>


        </div>
      </div>
      <div className={styles.splashBehind}>
        
      </div>
      <div className="splashBehindTwo">
        
      </div>
    </div>
    </div>
    
  );
}
