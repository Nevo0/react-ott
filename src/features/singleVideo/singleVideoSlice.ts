import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchVideoData } from "./singleVideoSliceAPI";
import { VideoInfo } from "./types";

export interface CounterState {
  videoInfo: VideoInfo;
  status: "idle" | "loading" | "failed";
}
// @ts-ignore-start
const initialState: CounterState = {
  videoInfo: {
    MediaId: 0,
    Title: "",
    Description: "",
    MediaTypeCode: "",
    MediaTypeDisplayName: "",
    StreamId: 0,
    Provider: "",
    ContentUrl: "",
  },
  status: "idle",
};

export const getMediaPlayInfo = createAsyncThunk(
  "singleVideoInfo/fetchVideoData",
  async (paramID: any) => {
    const response = await fetchVideoData(paramID);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const singleVideoInfoSlice = createSlice({
  name: "singleVideoInfo",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getMediaPlayInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMediaPlayInfo.fulfilled, (state, action) => {
        state.status = "idle";

        state.videoInfo = action.payload;
      })
      .addCase(getMediaPlayInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const videoInfoState = (state: RootState) => state.videoInfoe.videoInfo;
export const videoInfoStatus = (state: RootState) => state.videoInfoe.status;

export default singleVideoInfoSlice.reducer;
