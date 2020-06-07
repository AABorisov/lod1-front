

export interface VideoPlayerState {
  video_id: string;
  video_provider: string;
};

export const CHANGE_VIDEO = 'CHANGE_VIDEO';

export interface ChangeVideoAction {
  type: typeof CHANGE_VIDEO;
  payload: VideoPlayerState;
}


