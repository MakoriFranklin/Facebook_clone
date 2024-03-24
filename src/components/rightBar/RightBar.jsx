import "./rightBar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
import { FaCity, FaPeopleArrows } from "react-icons/fa";

function RightBar({profile}) {
  const HomeRightBar = ()=>{
    return(
      <>
       <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a bithday today</span>
        </div>
        <img className="rightBarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightBarTitle">Online Frends</h4>
        <ul className="rightBarFriendsList">
          

         
          {Users.map(u=>(
            <Online key= {u.id}user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = ()=>{
    return(
      <>
        <h1 className="rightBarTitle">User information</h1>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey"><FaCity/> <span>City:</span> </span>
            <span className="rightBarInfoValue">Nairobi </span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey"><FaCity/> <span>From:</span> </span>
            <span className="rightBarInfoValue">Mombasa </span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey"><FaPeopleArrows/> <span>Relationship:</span> </span>
            <span className="rightBarInfoValue">Single </span>
          </div>
        </div>

        <h1 className="rightBarTitle">User Friends</h1>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/assets/person/1.jpeg" alt="" />
            <span className="rightBarFollowingName">Elvis Mugenya</span>
          </div>

          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/assets/person/3.jpeg" alt="" />
            <span className="rightBarFollowingName">Elvis Mugenya</span>
          </div>

          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/assets/person/4.jpeg" alt="" />
            <span className="rightBarFollowingName">Elvis Mugenya</span>
          </div>

          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/assets/person/5.jpeg" alt="" />
            <span className="rightBarFollowingName">Elvis Mugenya</span>
          </div>

          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/assets/person/6.jpeg" alt="" />
            <span className="rightBarFollowingName">Elvis Mugenya</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
       {profile ? <ProfileRightBar/>:<HomeRightBar/>}
      </div>

    </div>
  )
}

export default RightBar
