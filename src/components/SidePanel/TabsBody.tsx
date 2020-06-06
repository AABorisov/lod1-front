import * as React from 'react';

import styles = require('./styles.scss');
import classnames from 'classnames';
import {ITab} from "./Tabs";
import People from "../people/People";
import Networking from "./tabs/Networking";
import Contacts from "./tabs/Contacts";
import Chat from "./tabs/Chat";

interface TabsBodyProps {
  tabs: Array<ITab>;
}

const TabsBody: React.FC<TabsBodyProps> = ({tabs}) => {
  const nameToComponent = (name: string) => {
    switch (name) {
      case 'People':
        return <People/>;
      case 'Networking':
        return <Networking/>;
      case 'Contacts':
        return <Contacts/>;
      case 'Chat':
        return <Chat/>;
    }
  }
  return <div className={styles['side-panel_panel-body']}>
    {tabs.map(tab => {
      return <div className={classnames(
        styles['side-panel_tab-body'],
        {
          [styles['side-panel_tab-body__active']]: tab.active
        })
      }>
        {nameToComponent(tab.name)}
      </div>
    })}
  </div>;
}

export default TabsBody;
