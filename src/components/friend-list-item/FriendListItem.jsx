import React from 'react'
import "./friendListItem.scss"

function FriendListItem ({avatar,name,isOnline}){
<li class="item">
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="" width="48" />
  <p class="name">{name}</p>
</li>
}

export default FriendListItem