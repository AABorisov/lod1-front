import * as React from 'react';
import classnames from 'classnames';
import { StepProps } from './Registration';

import styles = require('./styles.scss');

const SelectTags: React.FC<StepProps> = ({ user, fields, onChange }) => {
  return <div className={styles.select} />;
};

export default SelectTags;
