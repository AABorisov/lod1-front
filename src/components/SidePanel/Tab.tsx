import * as React from 'react';

import styles = require('./styles.scss');
import classnames from 'classnames';
import {ITab} from "./Tabs";

interface TabProps extends ITab {
  name: string;
  active: boolean;
}

const Tab: React.FC<TabProps> = ({name, active}) => {
  return <div className={
    classnames(
      styles['side-panel_tab'],
      {
        [styles['side-panel_active']] : active
      })
  }>
    <span className={styles['side-panel_panel-tab-title']}> {name}</span>
  </div>;
}

export default Tab;
