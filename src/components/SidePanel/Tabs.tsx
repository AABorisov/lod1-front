import * as React from 'react';

import styles = require('./styles.scss');
import classnames from 'classnames';
import Tab from "./Tab";

export interface ITab {
  name: string;
  active: boolean;
}

interface TabsProps {
  tabs: Array<ITab>;
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return <div className={styles['side-panel_tabs']}>
    <div className={styles['side-panel_tab-row']}>
      { tabs.map((tab) => <Tab key={tab.name} name={tab.name} active={tab.active}/>) }
    </div>
  </div>;
}

export default Tabs;
