import * as React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import YouTube, { Options } from 'react-youtube';
// @ts-ignore
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import { AppState } from '../../store';
import { VideoPlayerState } from '../../store/videoplayer/types';

import { OpentokData } from '../../store/opentokConfig/types';

import styles = require('./styles.scss');

interface VideoPlayerStateProps {
  videoplayer: VideoPlayerState;
  opentokConfig: OpentokData;
}

type VideoPlayerProps = VideoPlayerStateProps;

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoplayer, opentokConfig }) => {
  const renderVideoPlayer = (vp: VideoPlayerState) => {
    console.log(opentokConfig);
    switch (vp.video_provider) {
      case 'youtube':
        const opts: Options = {
          // width: '100%',
          // height: '1000',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };

        return (
          <YouTube
            videoId={videoplayer.video_id}
            opts={opts}
            className={styles.youtube}
            containerClassName={styles.youtubeContainer}
            key={videoplayer.video_id}
          />
        );
      case 'tokbox':
        if (opentokConfig.hasOwnProperty(videoplayer.video_id)) {
          const otConfig = opentokConfig[videoplayer.video_id];
          return (
            <OTSession
              apiKey={otConfig.apiKey}
              sessionId={otConfig.sessionId}
              token={otConfig.token}
              className={styles[`OT_${videoplayer.video_id}`]}
              key={otConfig.apiKey}
            >
              <OTPublisher />
              <OTStreams>
                <OTSubscriber />
              </OTStreams>
            </OTSession>
          );
        }
      default:
        return <img src="public/assets/afterparty/image 8.png" alt="" />;
    }
  };
  return <div className={styles.videoplayer}>{renderVideoPlayer(videoplayer)}</div>;
};

const mapStateToProps = (state: AppState): VideoPlayerStateProps => ({
  videoplayer: state.videoplayer,
  opentokConfig: state.opentokConfig.data,
});

export default connect(mapStateToProps)(VideoPlayer);
