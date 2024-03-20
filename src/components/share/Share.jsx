import "./share.css"
import { MdPermMedia, MdLabel } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
            <input type="text" className="shareInput" placeholder="What is in your Foma"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdPermMedia className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>

                <div className="shareOption">
                    <MdLabel className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>

                <div className="shareOption">
                    <FaLocationDot className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>

                <div className="shareOption">
                    <BsEmojiHeartEyesFill className="shareIcon"/>
                    <span className="shareOptionText">Feeling</span>
                </div>
            </div>

            <button className="shareBtn">Share</button>
        </div>
      </div>
          
    </div>
  )
}

export default Share
