import * as React from 'react';

import styles = require('./styles.scss');
import Header from "./Header";
import Tabs from "./Tabs";
import TabsBody from "./TabsBody";

const SidePanel: React.FC<{}> = () => {

  const tabs = [{
    name: 'Networking',
    active: false
  }, {
    name: 'Chat',
    active: true
  }, {
    name: 'People',
    active: false
  }, {
    name: 'Contacts',
    active: false
  }];

  return <div className={styles['side-panel_panel']}>
    <Header/>
    <Tabs tabs={tabs}/>
    <TabsBody tabs={tabs}/>
  </div>;
}

export default SidePanel;
