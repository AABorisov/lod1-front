import * as React from 'react';
import classnames from 'classnames';

import styles = require('./styles.scss');

const Header: React.FC<{}> = () => {
  return <div className={styles['people-list_search-input-bar']} />;
};

export default Header;
