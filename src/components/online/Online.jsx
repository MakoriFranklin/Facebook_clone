import "./online.css"

function Online({user}) {
  return (
    <div>
       <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img src={user.profilePicture} className="rightBarProfileImg" alt="" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">{user.username}</span>
          </li>
    </div>
  )
}

export default Online
