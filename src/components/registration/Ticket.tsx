import * as React from 'react';
import classnames from 'classnames';
import { StepProps } from './Registration';

import styles = require('./styles.scss');

const Ticket: React.FC<StepProps> = ({ user, fields, onChange }) => {
  const defaultRoles = {
    is_guest: false,
    is_investor: false,
    is_startup: false,
    is_user: false,
  };
  const onFieldChange = (field: string): ((event: React.MouseEvent<HTMLSpanElement>) => void) => (
    event: React.MouseEvent<HTMLSpanElement>
  ): void => {
    onChange({ ...defaultRoles, field: true });
  };
  return (
    <div className={styles.tickets}>
      <ul>
        {fields.map(field => (
          <li key={field.name}>
            <span onClick={onFieldChange(field.name)}>{field.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ticket;
