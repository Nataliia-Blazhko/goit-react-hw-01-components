import React from 'react';
import './friendListItem.scss';

function FriendListItem({ avatar, name, isOnline }) {
  const onlineStiles = {
    background: isOnline ? 'green' : 'red',
  };

  return (
    <li class="item">
      <span class="status" style={onlineStiles}></span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

export default FriendListItem;
