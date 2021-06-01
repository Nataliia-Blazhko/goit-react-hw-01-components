import React from 'react';
import styles from './FriendList.module.scss';
import FriendListItem from '../friend-list-item/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
