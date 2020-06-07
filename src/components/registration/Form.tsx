import * as React from 'react';
import classnames from 'classnames';
import {StepProps} from "./Registration";

import styles = require('./styles.scss');

const Form: React.FC<StepProps> = ({ user, fields, onChange }) => {
  const onFieldChange = (
    field: string
  ): ((event: React.InputHTMLAttributes<HTMLInputElement>) => void) => (
    event: React.InputHTMLAttributes<HTMLInputElement>
  ): void => {
    const {value} = event;
    onChange({ field: value });
  };
  return (
    (
<div className={styles['form']}>
    {
      fields.map(field => (
        <div key={field.name}>
          <label htmlFor={field.name} className={field.label}>{ field.label }</label>
          <input type='text' name={field.name} className={ styles.input }
                 onChange={onFieldChange(field.name)}/>
        </div>
      ))
    }
  </div>
);
};

export default Form;
