import React from 'react'

function Friends({user}) {
  return (
    <div>
        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src={user.profilePicture} className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">{user.username}</span>
            </li>
        </ul>
    </div>
  )
}

export default Friends
