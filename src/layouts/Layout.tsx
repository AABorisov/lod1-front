import * as React from 'react';

import styles = require('./styles.scss');
import {NavLink} from "react-router-dom";
import classnames from 'classnames';
import SidePanel from "../components/SidePanel/SidePanel";

interface LayoutProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
  return (
    <div className={styles.app}>
      <header className={styles.header_header}>DEV Labs
        <div className={styles.buttons}></div>
      </header>
      <nav className={styles['navigation-sidebar-component_navigation-sidebar-container']}>
        <NavLink to="reception" className={classnames(styles['navigation-sidebar-component_navigation-sidebar-link'],
  styles['test-id-navigation-sidebar-hopin-logo'])}/>
        <ul className={styles['navigation-sidebar-component_navigation-sidebar-list']}>
          { navLinks.map((link)=>
            <li className={classnames(
              styles['navigation-sidebar-segment_segment-container'],
              {
                [styles['navigation-sidebar-segment_active']]: link.active
              },
              styles['test-id-navigation-sidebar-segment'])}>
              <NavLink to={link.to}>
                <span className={styles['navigation-sidebar-segment_segment-icon']}/>
                <span className={styles['navigation-sidebar-segment_segment-title']}>{link.name}</span>
              </NavLink>
            </li>)}
        </ul>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
      <SidePanel />
    </div>
  );
};

export default Layout;
