import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightBar/RightBar"
import SideBar from "../../components/sidebar/SideBar"
import Topbar from "../../components/topbar/Topbar"
import "./home.css"

function Home() {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
      <SideBar/>
      <Feed/>
      <RightBar/>
      </div>
    </div>
  )
}

export default Home
