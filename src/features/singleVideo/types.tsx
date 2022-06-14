import { AuthorizationTokenObj } from "../auth/types";

export interface VideoObj {
  videoId: Number | undefined;
  token: AuthorizationTokenObj;
}

export interface VideoInfo {
  MediaId: number;
  Title: string;
  Description: string;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  StreamId: number;
  Provider: string;
  ContentUrl: string;
}

type IMG_URL = {
  img_url?: string;
};

export type VideoInfoAndURL = VideoInfo & IMG_URL;
