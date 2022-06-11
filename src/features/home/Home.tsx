import React, { useState } from 'react';
import { Browse } from '../browse/Browse';

import { Navbar } from '../navbar/Navbar';

import styles from './Home.module.css';

export function Home() {
 
  

  return (
    <div>
      <div className={styles.splashBody}>
        <Navbar></Navbar>
        {/* <Logo></Logo> */}
        <Browse></Browse>
     </div>
    </div>
  );
}
