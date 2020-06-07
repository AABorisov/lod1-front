import * as React from 'react';
import Header from "./Header";
import Tabs from "./Tabs";
import TabsBody from "./TabsBody";

import styles = require('./styles.scss');

const SidePanel: React.FC<{}> = () => {
  const tabs = [
    {
      name: 'Networking',
      active: false,
    },
    {
      name: 'Chat',
      active: false,
    },
    {
      name: 'People',
      active: true,
    },
    {
      name: 'Contacts',
      active: false,
    },
  ];

  return (
    <div className={styles['side-panel_panel']}>
      <Header />
      <Tabs tabs={tabs} />
      <TabsBody tabs={tabs} />
         </div>;
};

export default SidePanel;
