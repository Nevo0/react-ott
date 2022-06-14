import React, { useEffect, useState } from "react";
import {  useAppSelector } from "../../app/hooks";
import Logo from "../../logo.svg";
import { userStatus } from "../auth/authorizationSlice";
import { entitiesStatus } from "../browse/browseSlice";
import { videoInfoStatus } from "../singleVideo/singleVideoSlice";

import styles from "./Splash.module.css";

export function Splash() {
  
  const userAuth = useAppSelector(userStatus);
  const entitieStatus = useAppSelector(entitiesStatus);
  const videoStatus = useAppSelector(videoInfoStatus);
  const [showSplash, setShowSplash] = useState(false);
  useEffect(() => {
    const showSplash = [userAuth, entitieStatus, videoStatus].find(
      (status: "idle" | "loading" | "failed" | "LogIn") => status === "loading"
    );
    showSplash ? setShowSplash(true) : setShowSplash(false);
  }, [userAuth, entitieStatus, videoStatus]);

  return (
    <div>
      <div
        className={`${styles.splashBody} ${
          showSplash ? "" : styles.displaynon
        }`}
      >
        <div className={styles.splashScreen}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBox}>
              <img src={Logo} className={styles.splashLogo} alt="Logo" />
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
        <div className={styles.splashBehind}></div>
        <div className="splashBehindTwo"></div>
      </div>
    </div>
  );
}
