import * as React from 'react';

import styles = require('./styles.scss');
import {NavLink} from "react-router-dom";
import classnames from 'classnames';
import SidePanel from "../components/SidePanel/SidePanel";

interface LayoutAuthProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const LayoutAuth: React.FC<LayoutAuthProps> = ({ children }) => {
  return (
    <div className={styles.authApp}>
        {children}
    </div>
  );
};

export default LayoutAuth;
