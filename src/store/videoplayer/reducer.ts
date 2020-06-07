import {CHANGE_VIDEO, ChangeVideoAction, VideoPlayerState} from "./types";


const initialState: VideoPlayerState = {
  video_id: "ZR_v2WiV4r4",
  video_provider: "youtube",
};

export function videoplayerReducer(state: VideoPlayerState = initialState, action: ChangeVideoAction): VideoPlayerState {
  switch (action.type) {
    case CHANGE_VIDEO:
      return action.payload;
    default:
      return state;
  }
}
