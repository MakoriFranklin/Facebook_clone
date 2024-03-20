import "./topbar.css"
import { CiSearch } from "react-icons/ci";
import { IoPerson, IoChatboxEllipses, IoNotifications } from "react-icons/io5";
function Topbar() {
  return (
    <>
      <div className="div topBarContainer">
        <div className="topBarLeft">
            <span className="topBarLogo">Foma Social</span>
        </div>
        <div className="topBarCenter">
            <div className="searchBar">
                <CiSearch className="searchIcon"/>
                <input type="text" className="searchInput" placeholder="Search" />
            </div>
        </div>
        <div className="topBarRight">
            <div className="topBarLinks">
                <span className="topBarLink">Homepage</span>
                <span className="topBarLink">Timeline</span>
            </div>
            <div className="topBarIcons">
                <div className="topBarIconItem">
                    <IoPerson/>
                    <span className="topBarIconBadge">1</span>
                </div>

                <div className="topBarIconItem">
                    <IoChatboxEllipses/>
                    <span className="topBarIconBadge">1</span>
                </div>

                <div className="topBarIconItem">
                    <IoNotifications/>
                    <span className="topBarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/4.jpeg" alt="" className="topBarImg" />
        </div>

        
      </div>
    </>
  )
}

export default Topbar
