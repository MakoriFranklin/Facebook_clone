import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightBar/RightBar'

function Profile() {
  return (
    <div>
      <Topbar/>
      <div className="profile">
      <SideBar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImage" src="/assets/post/3.jpeg" alt="" />
            <img className="profileUserImage" src="/assets/post/3.jpeg" alt="" />
            </div>

            <div className="profileInfo">
                <h4 className='profileInfoName'>Safak Kocaoglu</h4>
                <span className='profileInfoDesc'>Hello</span>
            </div>
           
        </div>
        <div className="profileRightBottom">
             <Feed/>
            <RightBar profile/>
        </div>
       
        
      </div>
      
      </div>
    </div>
  )
}

export default Profile
