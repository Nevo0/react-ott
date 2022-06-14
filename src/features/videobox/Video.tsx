import React from "react";
import { Entities } from "../browse/types";
import styles from "./Videobox.module.css";
import { Link } from "react-router-dom";

type Props = React.PropsWithChildren<{
  entitie: Entities;
  index: number;
}>;

export const Video: React.FC<Props> = ({ entitie, index }: any) => {
  const img_url = entitie.Images.find(
    (img: any) => img.ImageTypeCode === "FRAME"
  ).Url;


  return (
    <li className={styles.video_item}>
      <div className={styles.video_box}>
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/${entitie.Id}`}
          key={entitie.Id}
        >
          <img src={img_url} />
        </Link>

        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/${entitie.Id}`}
          key={`${entitie.Id}-text`}
        >
          <h3>{entitie.Title}</h3>
        </Link>

        <h5 className={styles.year_category}>
          {entitie.Year ? entitie.Year : ""}{" "}
        </h5>
      </div>
    </li>
  );
};
