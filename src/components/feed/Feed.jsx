import Post from "../posts/Posts"
import Share from "../share/Share"
import "./feed.css"

function Feed() {
  return (
    <>
    <div className="feed">
      <div className="feedWrapper">
        <Share/> 
        <Post/>
      </div>
    </div>
    </>
  )
}

export default Feed