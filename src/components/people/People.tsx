import * as React from 'react';

import styles = require('./styles.scss');
import classnames from 'classnames';
import WrapperContainer from "../SidePanel/tabs/WrapperContainer";
import Footer from "./Footer";
import Body from "./Body";
import Header from "./Header";

const People: React.FC<{}> = () => {
  return <div className={styles['people_component-wrapper']}>
    <WrapperContainer header={<Header/>} body={<Body/>} footer={<Footer/>}/>
  </div>;
}

export default People;
