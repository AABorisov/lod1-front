import * as React from 'react';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

import styles = require('./styles.scss');

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  avatar: number;
  is_admin: boolean;
  is_guest: boolean;
  is_investor: boolean;
  is_startup: boolean;
  is_user: boolean;
  tags: any[];
}

const Body: React.FC<{}> = () => {
  const [userList, setUserList]: [User[], any] = useState([]);

  useEffect(() => {
    fetch('https://networking.webware-kassel.de/api/v1/account/all/')
      .then(r => r.json())
      .then(r => {
        console.log(r);

        setUserList(r);
      });
  }, []);

  const userListNode = userList.map(user => (
    <div key={user.id} className={styles['people-list_attendee-list-item']}>
      <div className={styles['people-list-item_avatar']}>
        <img
          src="https://s3.amazonaws.com/quiin/users/pictures/000/053/924/medium/filename.jpg?1585434185"
          alt=""
        />
      </div>
      <div className={styles['people-list-item_info']}>
        <div className={styles['people-list-item_info_name']}>
          {user.first_name} {user.last_name}
        </div>
        <div className={styles['people-list-item_info_content']}>{user.job_title}</div>
      </div>
    </div>
  ));

  return <div className={styles['people-list_attendee-list']}>{userListNode}</div>;
};

export default Body;
