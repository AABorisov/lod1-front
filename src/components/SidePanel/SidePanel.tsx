import * as React from 'react';
import Header from './HeaderPanel';
import Tabs from './Tabs';
import TabsBody from './TabsBody';
import HeaderPanel from './HeaderPanel';

import styles = require('./styles.scss');

const SidePanel: React.FC<{}> = () => {
  const tabs = [
    {
      name: 'Networking',
      active: false,
    },
    {
      name: 'Chat',
      active: true,
    },
    {
      name: 'People',
      active: false,
    },
    {
      name: 'Contacts',
      active: false,
    },
  ];

  return (
    <div className={styles['side-panel_panel']}>
      <HeaderPanel />
      <Tabs tabs={tabs} />
      <TabsBody tabs={tabs} />
    </div>
  );
};

export default SidePanel;
