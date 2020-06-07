import * as React from 'react';
import classnames from 'classnames';
import WrapperContainer from '../SidePanel/tabs/WrapperContainer';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';

import styles = require('./styles.scss');

const People: React.FC<{}> = () => {
  return (
    <div className={styles['people_component-wrapper']}>
      <WrapperContainer header={<Header />} body={<Body />} footer={<Footer />} />
    </div>
  );
};

export default People;
