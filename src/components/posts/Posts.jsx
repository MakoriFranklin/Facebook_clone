import "./post.css"
import { IoMdMore } from "react-icons/io";
function Post() {
  return (
    <>
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src="/assets/person/7.jpeg" alt="" />
              <span className="postUsername"><h3>Foma Tech</h3></span>
              <span className="postDate">10 mins ago</span>
            </div>
            <div className="postTopRight">
              <IoMdMore/>
            </div>
        </div>

        <div className="postTop"></div>

        <div className="postTop"></div>
      </div>
    </div>
    </>
  )
}

export default Post
