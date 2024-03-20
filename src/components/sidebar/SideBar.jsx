import "./sideBar.css"
import { MdOutlineRssFeed, MdEvent, MdGroups } from "react-icons/md";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaVideo, FaRegQuestionCircle, FaUserGraduate } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
function SideBar() {
  return (
    <div className="sideBar">
     <div className="sideWrapper">
        <ul className="sideBarList">
            <li className="sideBarListItem">
                <MdOutlineRssFeed className="sideBarIcon"/>
                <span className="sideBarListItem">Feed</span>
            </li>

            <li className="sideBarListItem">
                <BsChatSquareDotsFill className="sideBarIcon"/>
                <span className="sideBarListItemTe">Chats</span>
            </li>

            <li className="sideBarListItem">
                <FaVideo className="sideBarIcon"/>
                <span className="sideBarListItemTe">Videos</span>
            </li>

            <li className="sideBarListItem">
                <MdGroups className="sideBarIcon"/>
                <span className="sideBarListItemTe">Groups</span>
            </li>

            <li className="sideBarListItem">
                <IoBookmark className="sideBarIcon"/>
                <span className="sideBarListItemTe">Bookmarks</span>
            </li>

            <li className="sideBarListItem">
                <FaRegQuestionCircle className="sideBarIcon"/>
                <span className="sideBarListItemTe">Questions</span>
            </li>

            <li className="sideBarListItem">
                <TfiBag className="sideBarIcon"/>
                <span className="sideBarListItemTe">Jobs</span>
            </li>

            <li className="sideBarListItem">
                <MdEvent className="sideBarIcon"/>
                <span className="sideBarListItemTe">Events</span>
            </li>

            <li className="sideBarListItem">
                <FaUserGraduate className="sideBarIcon"/>
                <span className="sideBarListItemTe">Courses</span>
            </li>
        </ul>
        <button className="sideBarBtn">Show More</button>
        <hr className="sideBarhr"/>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>

        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/person/2.jpeg" className="sideBarFriendImg" alt="" />
                <span className="sideBarFriendName">Joseph Odongo</span>
            </li>
        </ul>
     </div>
    </div>
  )
}

export default SideBar
