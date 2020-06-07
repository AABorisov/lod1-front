import * as React from 'react';
import classnames from 'classnames';

import styles = require('../styles.scss');

interface WrapperContainerProps {
  header: JSX.Element | Array<JSX.Element>;
  body: JSX.Element | Array<JSX.Element>;
  footer: JSX.Element | Array<JSX.Element>;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({ header, body, footer }) => {
  return (
    (
<div className={styles['side-panel-wrapper_container']}>
    { header && <div>{ header }</div> }
    { body && <div className={styles['side-panel-wrapper_body']}>{ body }</div> }
    { footer && <div className={styles['side-panel-wrapper_footer']}>{ footer }</div> }
  </div>
);
};

export default WrapperContainer;
