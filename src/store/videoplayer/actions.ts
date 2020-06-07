import {CHANGE_VIDEO, ChangeVideoAction, VideoPlayerState} from './types';

export const changeVideo = (videoData: VideoPlayerState ): ChangeVideoAction => ({
  type: CHANGE_VIDEO,
  payload: videoData,
});
