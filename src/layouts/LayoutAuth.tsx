import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import SidePanel from '../components/SidePanel/SidePanel';

import styles = require('./styles.scss');

interface LayoutAuthProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const LayoutAuth: React.FC<LayoutAuthProps> = ({ children }) => {
  return <div className={styles.authApp}>{children}</div>;
};

export default LayoutAuth;
