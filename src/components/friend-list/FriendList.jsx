import React from 'react'
import "./friendList.scss"
import FriendListItem from "../friend-list-item/FriendListItem"


function FriendList ({friends}){
    <ul class="friend-list">
        {friends.map(({avatar,name,isOnline = friend})=> {FriendListItem()})}
</ul>
}

export default FriendList