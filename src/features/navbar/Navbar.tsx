import React, { useState } from "react";

import styles from "./Navbar.module.css";

export function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
  
  const handleToggleClass = (event: any) => {
    console.log("xxx");
    
    // onChange={(e) => handleSetMaterial(e)
    setShowMenu(showMenu=> !showMenu)
 }
    return (
        <header id="header" className={`${styles.header} ${showMenu ? styles.optimize : ''}`
}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={`${styles.nav_item} ${styles.user}`}>
            <a href="#" className={styles.nav_link}>
              <i className={`fas fa-user ${styles.icon}`}></i>
              <span className={styles.text}>User</span>
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>
              <i className={`fas fa-search ${styles.icon}`}></i>
              <span className={styles.text}>Search</span>
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>
              <i className={`fas  fa-home ${styles.icon}`}></i>
              <span className={styles.text}>Home</span>
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>
              <i className={`fas fa-play ${styles.icon}`}></i>
              <span className={styles.text}>Live</span>
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>
              <i className={`fas  fa-tv ${styles.icon}`}></i>
              <span className={styles.text}>VOD</span>
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>
              <i className={`fas fa-cog ${styles.icon}`}></i>
              <span className={styles.text}>Setings</span>
            </a>
          </li>
        </ul>
      </nav>
            <a id="btn_navig" className={styles.btn_navig} onClick={(e) => handleToggleClass(e)}>
        <i className={`fas fa-bars open ${styles.icon}`}></i>
        <i className={`fas fa-times close ${styles.icon}`}></i>
      </a>
    </header>
  );
}
