import axios from "axios";
import { MediaList } from "./types";
import { AuthorizationTokenObj } from "../auth/types";
export function fetchMediaLis(token: AuthorizationTokenObj) {
  return new Promise<{ data: MediaList }>(async (resolve,reject) => {
    const jsnoTosned = {
      MediaListId: 2,
      IncludeCategories: false,
      IncludeImages: true,
      IncludeMedia: false,
      PageNumber: 1,
      PageSize: 15,
    };
    //  console.log(DATA);
    const config = {
      headers: {
        Authorization: `Bearer ${token.Token}`,
        "Content-Type": "application/json",
      },
    };

    // resolve({ data: DATA })

    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.post(
        "https://thebetter.bsgroup.eu/Media/GetMediaList",
        jsnoTosned,
        config
      );

      // console.log(JSON.stringify(data, null, 4));

      resolve({ data: data });

      // 👇️ "response status is: 200"
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
