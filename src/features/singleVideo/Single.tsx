import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./SingleVideo.module.css";

export default function Single({ video }: any) {
 
  const [imgVideo, setImgVideo] = useState("");
  const [videoImg_FRAME, setImg_FRAME] = useState("");
  const [videoImg_COVER, setImg_COVER] = useState("");

  useEffect(() => {
    if (video.img_url) {
      const img_FRAME = video.img_url.find(
        (img: any) => img.ImageTypeCode === "FRAME"
      ).Url;
      const img_COVER = video.img_url.find(
        (img: any) => img.ImageTypeCode === "COVER"
      );
      if (img_COVER) {
        setImg_COVER(img_COVER.Url);
      }
      setImg_FRAME(img_FRAME);
      if (img_COVER) {
        setImgVideo(img_COVER.Url);
      } else {
        setImgVideo(img_FRAME);
      }
    }
  }, [video]);

  return (
    <div className={styles.singlehBody}>
      {video.ContentUrl && ReactPlayer.canPlay(video.ContentUrl) ? (
        <ReactPlayer
          className={styles.reactPlayer}
          url={video.ContentUrl}
          controls={true}
          playing={true}
          loop={false}
          width={"100%"}
          height={"auto"}
          volume={0.2}
        />
      ) : (
        <ReactPlayer
          className={styles.reactPlayer}
          url="https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd"
          width={"96%"}
          height={"auto"}
        />
      )}

      <div className={styles.single}>
        <header className={styles.singleHeader}>
          <div className={styles.image}>
            <figure>
              {/* COVER */}
              <img src={imgVideo} alt="Dom Gucci online" />
            </figure>
          </div>
          <div className={styles.videoInfo}>
            <h1 className={styles.title}>{video.Title} </h1>

            <div className={styles.subTitle}></div>

            <div className={styles.description}>{video.Description}</div>
          </div>
        </header>
      </div>
    </div>
  );
}
