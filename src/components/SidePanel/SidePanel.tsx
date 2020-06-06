import * as React from 'react';

import styles = require('./styles.scss');
import Header from "./Header";
import Tabs from "./Tabs";
import TabBody from "./TabBody";

const SidePanel: React.FC<{}> = () => {
  return <div className={styles['side-panel_panel']}>
    <Header/>
    <Tabs/>
    <TabBody/>
  </div>;
}

export default SidePanel;
