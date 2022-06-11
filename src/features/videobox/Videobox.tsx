import React, { useState } from 'react';


import styles from './Videobox.module.css';

export function Videobox() {


  return (
    <li className={styles.video_container}>
     <h2>Recently watched</h2>
      <ul className={styles.video_scroller}>
      <li>
          <div className={styles.video_box}>
          <a target="_blank" href="https://www.youtube.com/watch?v=6b5AaRW5110">
          <img src="https://i.ytimg.com/vi/6b5AaRW5110/mqdefault.jpg"/></a>
          <h3>Floatplane Alpha Launch Date SET!! - WAN Show Feb. 23 2018</h3>
        </div>
      </li>
      </ul>
    </li>
  );
}
