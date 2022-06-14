import React from "react";
import { Browse } from "../browse/Browse";
import { Navbar } from "../navbar/Navbar";

import styles from "./Home.module.css";

export function Home() {
  return (
    <div>
      <div className={styles.splashBody}>
        <Navbar/>
        <Browse/>
      </div>
    </div>
  );
}
