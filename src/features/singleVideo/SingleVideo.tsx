import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { entitiesList } from "../browse/browseSlice";
import { Navbar } from "../navbar/Navbar";

import { authToken } from "../auth/authorizationSlice";

import Single from "./Single";

import styles from "./SingleVideo.module.css";
import { getMediaPlayInfo, videoInfoState } from "./singleVideoSlice";
import { VideoInfo, VideoInfoAndURL, VideoObj } from "./types";


export default function SingleVideo() {
  let params = useParams();

  const entities: any = useAppSelector(entitiesList);
  const videoInfo: VideoInfo = useAppSelector(videoInfoState);
  const dispatch = useAppDispatch();
  const token = useAppSelector(authToken);
  const [video, setVideo] = useState({});

  useEffect(() => {
    const obj: VideoObj = {
      videoId: Number(params.videoId),
      token: token,
    };
    dispatch(getMediaPlayInfo(obj));
  }, []);
  useEffect(() => {
    const img_url = entities.find((el: any) => el.Id == params.videoId).Images;
    const new_videoInfo: VideoInfoAndURL = { ...videoInfo };
    new_videoInfo.img_url = img_url;
    setVideo(new_videoInfo);
  }, [videoInfo]);

  return (
    <div>
      <div className={styles.splashBody}>
        <Navbar />
        <Single video={video} />
      </div>
    </div>
  );
}
