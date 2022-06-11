import React, { useState } from "react";
import { Videobox } from "../videobox/Videobox";

import styles from "./Browse.module.css";

export function Browse() {
  
  return (
    <div
      id="browse"
      className={`${styles.browse} `}
    >
      <section className="recently">
      <Videobox/>
      
      </section>
      <section className="favouire">
      <h2>Favouire movies</h2>
      <ul>
      <li>
        <div className="videobox">
          <a target="_blank" href="https://www.youtube.com/watch?v=6b5AaRW5110">
          <img src="https://i.ytimg.com/vi/6b5AaRW5110/mqdefault.jpg"/></a>
          <h3>Floatplane Alpha Launch Date SET!! - WAN Show Feb. 23 2018</h3>
        </div>
      </li>
      </ul>
      </section>
    </div>
  );
}
