import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authToken, userState } from "../auth/authorizationSlice";
import { entitiesList } from "./browseSlice";
import { Videobox } from "../videobox/Videobox";

import styles from "./Browse.module.css";

import { getMediaLisAsync } from "./browseSlice";

export function Browse() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(authToken);
  const user = useAppSelector(userState);
  const entities = useAppSelector(entitiesList);

  useEffect(() => {
    dispatch(getMediaLisAsync(token));
  }, [user]);

  return (
    <div id="browse" className={`${styles.browse} `}>
      <section className="recently">
        <Videobox title={"Recently watched"} entities={entities} />
      </section>
    </div>
  );
}
