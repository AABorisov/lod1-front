import * as React from 'react';

import styles = require('./styles.scss');
import classnames from 'classnames';
import {StepProps} from "./Registration";

const SelectTags: React.FC<StepProps> = ({user, fields, onChange}) => {
  return <div className={styles['select']}>

  </div>;
}

export default SelectTags;
