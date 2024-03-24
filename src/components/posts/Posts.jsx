import "./post.css"
import { IoMdMore } from "react-icons/io";
import {Users} from "../../dummyData"
import { useState } from "react";
function Post({post}) {
  // const user = Users.filter(u=>u.id===1)
  const [likes, setLikes] = useState(post.like);
  const [isliked, setIsliked] = useState(false);

  const likeHandler = ()=>{
      setLikes(isliked ? likes-1 : likes+1)
      setIsliked(!isliked)
  }
  return (
    <>
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
              <span className="postUsername"><h3>{Users.filter(u=>u.id===post.userId)[0].username}</h3></span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <IoMdMore/>
            </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBtnLeft">
            <img className="likeIcon"src="/assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon"src="/assets/heart.png" onClick={likeHandler} alt="" />
            <span className="likeCounter">{likes} people like it</span>
          </div>
          <div className="postButtonRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Post
