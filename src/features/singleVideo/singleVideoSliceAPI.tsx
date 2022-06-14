import axios from "axios";
import { VideoInfo, VideoObj } from "./types";

export function fetchVideoData(videoObj: VideoObj) {
  return new Promise<{ data: VideoInfo }>(async (resolve, reject) => {
    const jsnoTosned = {
      MediaId: videoObj.videoId,
      StreamType: "TRIAL",
    };

    const config = {
      headers: {
        Authorization: `Bearer ${videoObj.token.Token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const { data, status } = await axios.post(
        "https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo",
        jsnoTosned,
        config
      );
      resolve({ data: data });
      console.log("response status is: ", status);      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        reject(error.message)
        return error.message;
      } else {
        reject(error)
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  });
}
