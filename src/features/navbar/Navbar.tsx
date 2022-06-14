import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleClass = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <header
      id="header"
      className={`${styles.header} ${showMenu ? styles.optimize : ""}`}
    >
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={`${styles.nav_item} ${styles.user}`}>
            <Link className={styles.nav_link} to={`/login`} key={"Home"}>
              <i className={`fas fa-user ${styles.icon}`}></i>
              <span className={styles.text}>User</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to={`/`} key={"Home"}>
              <i className={`fas fa-search ${styles.icon}`}></i>
              <span className={styles.text}>Search</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to={`/`} key={"Home"}>
              <i className={`fas  fa-home ${styles.icon}`}></i>
              <span className={styles.text}>Home</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to={`/`} key={"Home"}>
              <i className={`fas fa-play ${styles.icon}`}></i>
              <span className={styles.text}>Live</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to={`/`} key={"Home"}>
              <i className={`fas  fa-tv ${styles.icon}`}></i>
              <span className={styles.text}>VOD</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to={`/`} key={"Home"}>
              <i className={`fas fa-cog ${styles.icon}`}></i>
              <span className={styles.text}>Setings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <a
        href=""
        id="btn_navig"
        className={styles.btn_navig}
        onClick={() => handleToggleClass()}
      >
        <i className={`fas fa-bars ${styles.open} ${styles.icon}`}></i>
        <i className={`fas fa-times ${styles.close} ${styles.icon}`}></i>
      </a>
    </header>
  );
}
