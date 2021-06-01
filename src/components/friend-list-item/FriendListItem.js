import React from 'react';
import styles from './FriendListItem.module.scss';

function FriendListItem({ avatar, name, isOnline }) {
  const onlineStyles = {
    background: isOnline ? 'green' : 'red',
  };

  return (
    <li className={styles.item}>
      <span className={styles.status} style={onlineStyles}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
