import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import SidePanel from '../components/SidePanel/SidePanel';
import { changeVideo } from '../store/videoplayer/actions';
import { VideoPlayerState } from '../store/videoplayer/types';

import styles = require('./styles.scss');

interface LayoutDispatchProps {
  changeVideoplayer: (data: VideoPlayerState) => void;
}

interface LayoutProps extends LayoutDispatchProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const Layout: React.FC<LayoutProps> = ({ children, changeVideoplayer }) => {
  const navLinks = [
    // {
    //   to: 'reception',
    //   active: true,
    //   name: 'Reception',
    // },
    {
      to: 'afterparty',
      active: true,
      name: 'Afterparty',
    },
    // {
    //   to: 'session',
    //   active: false,
    //   name: 'Session',
    // },
    // {
    //   to: 'networking',
    //   active: false,
    //   name: 'Networking',
    // },
  ];
  const onNetworkingClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    changeVideoplayer({
      video_id: 'networking',
      video_provider: 'tokbox',
    });
  };
  const onVideoroomClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    changeVideoplayer({
      video_id: 'common',
      video_provider: 'tokbox',
    });
  };
  return (
    <div className={styles.app}>
      <header className={styles.header_header}>
        DEV Labs
        <div className={styles.header_buttons}>
          <button
            className={classnames(styles.header_buttons_button, styles.header_buttons_networking)}
            onClick={onNetworkingClick}
          >
            Networking
          </button>
          <button
            className={classnames(styles.header_buttons_button, styles.header_buttons_videoroom)}
            onClick={onVideoroomClick}
          >
            Video Room
          </button>
        </div>
      </header>
      <nav className={styles['navigation-sidebar-component_navigation-sidebar-container']}>
        <NavLink
          to="reception"
          className={classnames(
            styles['navigation-sidebar-component_navigation-sidebar-link'],
            styles['test-id-navigation-sidebar-hopin-logo']
          )}
        />
        <ul className={styles['navigation-sidebar-component_navigation-sidebar-list']}>
          {navLinks.map(link => (
            <li
              className={classnames(
                styles['navigation-sidebar-segment_segment-container'],
                {
                  [styles['navigation-sidebar-segment_active']]: link.active,
                },
                styles['test-id-navigation-sidebar-segment']
              )}
            >
              <NavLink to={link.to}>
                <span className={styles['navigation-sidebar-segment_segment-icon']} />
                <span className={styles['navigation-sidebar-segment_segment-title']}>
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.main}>{children}</main>
      <SidePanel />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): LayoutDispatchProps =>
  bindActionCreators(
    {
      changeVideoplayer: changeVideo,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Layout);
