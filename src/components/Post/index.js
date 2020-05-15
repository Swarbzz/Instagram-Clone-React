import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    return <article className="Post" ref="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-avatar">
            <img src="https://pbs.twimg.com/profile_images/739024152187797504/xWAHF_Yu_400x400.jpg" alt="George" />
          </div>
          <div className="Post-user-nickname">
            <span>George</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
        <div className="Post-image-bg">
          <img src="https://s3-eu-west-1.amazonaws.com/images.castcall.blue-compass.com/portfolioraw/1568/1568547.jpg" alt="Headshot"  />
        </div>
      </div>
      <div className="Post-caption">
        <strong>George</strong> Drinking away quarantine!
      </div>
    </article>;
  }
}
export default Post;