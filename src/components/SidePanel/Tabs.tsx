import * as React from 'react';

import styles = require('./styles.scss');
import classnames from 'classnames';
import Tab from "./Tab";


const Tabs: React.FC<{}> = () => {
  const tabs = [{
    name: 'Networking',
    active: true
  }, {
    name: 'Chat',
    active: false
  }, {
    name: 'People',
    active: false
  }, {
    name: 'Contacts',
    active: false
  }];
  return <div className={styles['side-panel_tabs']}>
    <div className={styles['side-panel_tab-row']}>
      { tabs.map((tab) => <Tab key={tab.name} name={tab.name} active={tab.active}/>) }
    </div>
  </div>;
}

export default Tabs;
