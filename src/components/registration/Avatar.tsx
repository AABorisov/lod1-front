import * as React from 'react';

import styles = require('./styles.scss');
import classnames from 'classnames';
import {StepProps} from "./Registration";

const Avatar: React.FC<StepProps> = ({user, fields, onChange}) => {
  const avatars = [1, 2, 3];
  const onAvatarClick = (id: number): (event: React.MouseEvent<HTMLImageElement>) => void => (event: React.MouseEvent<HTMLImageElement>): void => {
    event.preventDefault();
    onChange({ avatar: id });
  }

  return <div className={styles['avatars']}>
    { avatars.map(avatarId => (
      <img
        className={classnames(
          styles.avatar,
          {
            [styles.selected]: user.avatar === avatarId
          }
        )}
        alt=""
        src={`public/assets/registration/avatar_${avatarId}.png`}
        onClick={onAvatarClick(avatarId)}
        key={avatarId}/>
      ))
    }
  </div>;
}

export default Avatar;
